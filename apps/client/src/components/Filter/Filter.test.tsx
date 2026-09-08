import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@/test/test-utils";
import { Category } from "@/enums";
import Filter from "./Filter";

const push = vi.fn();
const useSearchParams = vi.fn();
const usePathname = vi.fn();
const useRouter = vi.fn();

vi.mock("next/navigation", () => ({
  useSearchParams: () => useSearchParams(),
  usePathname: () => usePathname(),
  useRouter: () => useRouter(),
}));

describe("Filter", () => {
  beforeEach(() => {
    push.mockReset();
    usePathname.mockReturnValue("/products");
    useRouter.mockReturnValue({ push });
    useSearchParams.mockReturnValue(new URLSearchParams());
  });

  it("renders the sort label and options", () => {
    render(<Filter />);

    expect(screen.getByText("Sort by:")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Newest" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Oldest" })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Price: Low to High" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Price: High to Low" }),
    ).toBeInTheDocument();
  });

  it("updates the sort query param when an option is selected", async () => {
    const user = userEvent.setup();
    render(<Filter />);

    await user.selectOptions(screen.getByRole("combobox"), "asc");

    expect(push).toHaveBeenCalledWith("/products?sort=asc", { scroll: false });
  });

  it("preserves existing query params when sorting", async () => {
    const user = userEvent.setup();
    useSearchParams.mockReturnValue(
      new URLSearchParams(`category=${Category.Shoes}`),
    );

    render(<Filter />);

    await user.selectOptions(screen.getByRole("combobox"), "desc");

    expect(push).toHaveBeenCalledWith(
      `/products?category=${Category.Shoes}&sort=desc`,
      {
        scroll: false,
      },
    );
  });
});
