import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@/test/test-utils";
import ProductSizeSelect from "./ProductSizeSelect";

const sizes = ["s", "m", "l"] as const;

describe("ProductSizeSelect", () => {
  it("renders the size label and options", () => {
    render(<ProductSizeSelect sizes={[...sizes]} onChange={vi.fn()} />);

    expect(screen.getByText("Size")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "S" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "M" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "L" })).toBeInTheDocument();
  });

  it("calls onChange with the selected size when an option is chosen", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ProductSizeSelect sizes={[...sizes]} onChange={onChange} />);

    await user.selectOptions(screen.getByRole("combobox"), "m");

    expect(onChange).toHaveBeenCalledWith({ type: "size", value: "m" });
  });
});
