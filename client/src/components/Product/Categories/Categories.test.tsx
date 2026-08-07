import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "@/test/test-utils";
import Categories from "./Categories";

const push = vi.fn();
const useSearchParams = vi.fn();
const usePathname = vi.fn();
const useRouter = vi.fn();

vi.mock("next/navigation", () => ({
  useSearchParams: () => useSearchParams(),
  usePathname: () => usePathname(),
  useRouter: () => useRouter(),
}));

describe("Categories", () => {
  beforeEach(() => {
    push.mockReset();
    usePathname.mockReturnValue("/");
    useRouter.mockReturnValue({ push });
    useSearchParams.mockReturnValue(new URLSearchParams());
  });

  it("renders all category labels from the dictionary", () => {
    renderWithProviders(<Categories />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("T-shirts")).toBeInTheDocument();
    expect(screen.getByText("Shoes")).toBeInTheDocument();
    expect(screen.getByText("Accessories")).toBeInTheDocument();
    expect(screen.getByText("Bags")).toBeInTheDocument();
    expect(screen.getByText("Dresses")).toBeInTheDocument();
    expect(screen.getByText("Jackets")).toBeInTheDocument();
    expect(screen.getByText("Gloves")).toBeInTheDocument();
  });

  it("highlights the selected category from the URL", () => {
    useSearchParams.mockReturnValue(new URLSearchParams("category=shoes"));

    renderWithProviders(<Categories />);

    expect(screen.getByText("Shoes").closest("div")).toHaveClass("bg-white");
    expect(screen.getByText("All").closest("div")).toHaveClass("text-gray-500");
  });

  it("updates the category query param when a category is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Categories />);

    await user.click(screen.getByText("Bags"));

    expect(push).toHaveBeenCalledWith("/?category=bags", { scroll: false });
  });
});
