import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@/test/test-utils";
import ProductList from "./ProductList";
import { PRODUCTS } from "@/constants";
import { Category, Path } from "@/enums";

vi.mock("../Categories", () => ({
  Categories: () => <div data-testid="categories">Categories</div>,
}));

vi.mock("@/components/Filter", () => ({
  Filter: () => <div data-testid="filter">Filter</div>,
}));

vi.mock("../ProductCard", () => ({
  ProductCard: ({ product }: { product: { id: number | string } }) => (
    <div data-testid={`product-card-${product.id}`}>Product {product.id}</div>
  ),
}));

describe("ProductList", () => {
  it("renders categories and a card for each product", () => {
    render(<ProductList category="test" path={Path.Products} />);

    expect(screen.getByTestId("categories")).toBeInTheDocument();

    for (const product of PRODUCTS) {
      expect(
        screen.getByTestId(`product-card-${product.id}`),
      ).toBeInTheDocument();
    }
  });

  it("links to filtered products when a category is provided", () => {
    render(<ProductList category={Category.Shoes} path={Path.Products} />);

    expect(
      screen.getByRole("link", { name: "View All Products" }),
    ).toHaveAttribute("href", `/products?category=${Category.Shoes}`);
  });

  it("links to all products when category is empty", () => {
    render(<ProductList category="" path={Path.Homepage} />);

    expect(
      screen.getByRole("link", { name: "View All Products" }),
    ).toHaveAttribute("href", "/products");
  });
});
