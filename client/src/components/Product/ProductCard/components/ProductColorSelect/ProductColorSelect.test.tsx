import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@/test/test-utils";
import ProductColorSelect from "./ProductColorSelect";

const colors = ["gray", "purple", "blue"] as const;

describe("ProductColorSelect", () => {
  it("renders the color label and a swatch for each color", () => {
    const { container } = render(
      <ProductColorSelect
        colors={[...colors]}
        selectedColor="gray"
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(
      container.querySelector('[style="background-color: gray;"]'),
    ).toBeTruthy();
    expect(
      container.querySelector('[style="background-color: purple;"]'),
    ).toBeTruthy();
    expect(
      container.querySelector('[style="background-color: blue;"]'),
    ).toBeTruthy();
  });

  it("highlights the selected color with a stronger border", () => {
    const { container } = render(
      <ProductColorSelect
        colors={[...colors]}
        selectedColor="purple"
        onChange={vi.fn()}
      />,
    );

    const purpleSwatch = container.querySelector(
      '[style="background-color: purple;"]',
    )?.parentElement;

    expect(purpleSwatch).toHaveClass("border-gray-400");
  });

  it("calls onChange with the selected color when a swatch is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(
      <ProductColorSelect
        colors={[...colors]}
        selectedColor="gray"
        onChange={onChange}
      />,
    );

    const purpleSwatch = container.querySelector(
      '[style="background-color: purple;"]',
    )?.parentElement;
    expect(purpleSwatch).toBeTruthy();
    await user.click(purpleSwatch!);

    expect(onChange).toHaveBeenCalledWith({ type: "color", value: "purple" });
  });
});
