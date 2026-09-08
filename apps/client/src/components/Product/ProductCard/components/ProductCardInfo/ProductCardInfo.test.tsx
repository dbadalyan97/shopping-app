import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
import ProductCardInfo from "./ProductCardInfo";

describe("ProductCardInfo", () => {
  it("renders the product name and short description", () => {
    render(
      <ProductCardInfo
        name="Adidas CoreFit T-Shirt"
        shortDescription="A comfortable everyday tee."
      />,
    );

    expect(screen.getByText("Adidas CoreFit T-Shirt")).toBeInTheDocument();
    expect(
      screen.getByText("A comfortable everyday tee."),
    ).toBeInTheDocument();
  });
});
