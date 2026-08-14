import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
import ProductCardActions from "./ProductCardActions";

describe("ProductCardActions", () => {
  it("renders the formatted price", () => {
    render(<ProductCardActions price={39.9} />);

    expect(screen.getByText("$39.90")).toBeInTheDocument();
  });

  it("renders the add to cart button", () => {
    render(<ProductCardActions price={19.99} />);

    expect(
      screen.getByRole("button", { name: /Add to Cart/i }),
    ).toBeInTheDocument();
  });
});
