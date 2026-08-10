import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
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
    render(<ProductCard product={product} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/products/1");
  });

  it("renders the product image with the product name as alt text", () => {
    render(<ProductCard product={product} />);

    const image = screen.getByRole("img", { name: "Adidas CoreFit T-Shirt" });
    expect(image).toHaveAttribute("src", "/products/1g.png");
  });
});
