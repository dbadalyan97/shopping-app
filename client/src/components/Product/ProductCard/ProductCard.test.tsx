import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
import ProductCard from "./ProductCard";
import type { ProductType } from "@/types";

const product: ProductType = {
  id: 1,
  key: "adidasCoreFitTShirt",
  price: 39.9,
  sizes: ["s", "m", "l"],
  colors: ["gray", "purple"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
  },
};

describe("ProductCard", () => {
  it("links to the product detail page", async () => {
    render(await ProductCard({ product }));

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/products/1");
  });

  it("renders the product image with the translated name as alt text", async () => {
    render(await ProductCard({ product }));

    const image = screen.getByRole("img", { name: "Adidas CoreFit T-Shirt" });
    expect(image).toHaveAttribute("src", "/products/1g.png");
  });
});
