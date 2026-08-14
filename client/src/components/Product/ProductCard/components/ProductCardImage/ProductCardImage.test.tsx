import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
import ProductCardImage from "./ProductCardImage";

describe("ProductCardImage", () => {
  it("links to the product detail page", () => {
    render(
      <ProductCardImage
        productId={1}
        name="Adidas CoreFit T-Shirt"
        imageSrc="/products/1g.png"
      />,
    );

    expect(screen.getByRole("link")).toHaveAttribute("href", "/products/1");
  });

  it("renders the product image with the product name as alt text", () => {
    render(
      <ProductCardImage
        productId={1}
        name="Adidas CoreFit T-Shirt"
        imageSrc="/products/1g.png"
      />,
    );

    const image = screen.getByRole("img", { name: "Adidas CoreFit T-Shirt" });
    expect(image).toHaveAttribute("src", "/products/1g.png");
  });
});
