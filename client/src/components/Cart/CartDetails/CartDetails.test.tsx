import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "@/test/test-utils";
import CartDetails from "./CartDetails";
import { PRODUCTS } from "@/constants";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

const cartItems = [
  {
    ...PRODUCTS[0],
    quantity: 2,
    selectedSize: PRODUCTS[0].sizes[0],
    selectedColor: PRODUCTS[0].colors[0],
  },
  {
    ...PRODUCTS[1],
    quantity: 1,
    selectedSize: PRODUCTS[1].sizes[0],
    selectedColor: PRODUCTS[1].colors[0],
  },
];

describe("CartDetails", () => {
  beforeEach(() => {
    push.mockReset();
  });

  it("renders the cart summary rows with the computed subtotal", () => {
    renderWithProviders(<CartDetails cartItems={cartItems} activeStep="1" />);

    expect(screen.getByText("Cart Details")).toBeInTheDocument();
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText("Discount( 10%)")).toBeInTheDocument();
    expect(screen.getByText("Shipping Fee")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getAllByText("$139.70")).toHaveLength(2);
    expect(screen.getAllByText("$10.00")).toHaveLength(2);
  });

  it("navigates to the shipping step from the first step", async () => {
    const user = userEvent.setup();

    renderWithProviders(<CartDetails cartItems={cartItems} activeStep="1" />);

    await user.click(screen.getByRole("button", { name: /continue/i }));

    expect(push).toHaveBeenCalledWith("/cart?step=2", { scroll: false });
  });

  it("hides the continue button after the first step", () => {
    renderWithProviders(<CartDetails cartItems={cartItems} activeStep="2" />);

    expect(
      screen.queryByRole("button", { name: /continue/i }),
    ).not.toBeInTheDocument();
  });
});
