import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@/test/test-utils";
import ProductList from "./ProductList";
import { PRODUCTS } from "@/constants";

vi.mock("../Categories", () => ({
  Categories: () => <div data-testid="categories">Categories</div>,
}));

vi.mock("../ProductCard", () => ({
  ProductCard: ({ product }: { product: { id: number | string } }) => (
    <div data-testid={`product-card-${product.id}`}>Product {product.id}</div>
  ),
}));

describe("ProductList", () => {
  it("renders categories and a card for each product", () => {
    render(<ProductList category="test" />);

    expect(screen.getByTestId("categories")).toBeInTheDocument();

    for (const product of PRODUCTS) {
      expect(
        screen.getByTestId(`product-card-${product.id}`),
      ).toBeInTheDocument();
    }
  });
});
