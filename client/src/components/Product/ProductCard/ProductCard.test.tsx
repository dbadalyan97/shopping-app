import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "@/test/test-utils";
import ProductCard from "./ProductCard";
import type { ProductType } from "@/types";

const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l"],
  colors: ["gray", "purple"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
  },
};

describe("ProductCard", () => {
  it("links to the product detail page", () => {
    renderWithProviders(<ProductCard product={product} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/products/1");
  });

  it("renders the product image with the product name as alt text", () => {
    renderWithProviders(<ProductCard product={product} />);

    const image = screen.getByRole("img", { name: "Adidas CoreFit T-Shirt" });
    expect(image).toHaveAttribute("src", "/products/1g.png");
  });

  it("renders the product name, description, price, and add to cart button", () => {
    renderWithProviders(<ProductCard product={product} />);

    expect(screen.getByText("Adidas CoreFit T-Shirt")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("$39.90")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add to Cart/i }),
    ).toBeInTheDocument();
  });

  it("renders size options with the first size selected by default", () => {
    renderWithProviders(<ProductCard product={product} />);

    const sizeSelect = screen.getByRole("combobox");
    expect(sizeSelect).toHaveValue("s");
    expect(screen.getByRole("option", { name: "S" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "M" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "L" })).toBeInTheDocument();
  });

  it("updates the selected size when a different option is chosen", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ProductCard product={product} />);

    const sizeSelect = screen.getByRole("combobox");
    await user.selectOptions(sizeSelect, "m");

    expect(sizeSelect).toHaveValue("m");
  });

  it("updates the product image when a different color is selected", async () => {
    const user = userEvent.setup();
    const { container } = renderWithProviders(<ProductCard product={product} />);

    const image = screen.getByRole("img", { name: "Adidas CoreFit T-Shirt" });
    expect(image).toHaveAttribute("src", "/products/1g.png");

    const purpleSwatch = container.querySelector(
      '[style="background-color: purple;"]',
    )?.parentElement;
    expect(purpleSwatch).toBeTruthy();
    await user.click(purpleSwatch!);

    expect(image).toHaveAttribute("src", "/products/1p.png");
  });
});
