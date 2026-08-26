import { describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import CartStepContent from "./CartStepContent";
import { PRODUCTS } from "@/constants";

vi.mock("@/components/Cart/CartItems", () => ({
  CartItems: ({ items }: { items: Array<{ id: number | string }> }) => (
    <div data-testid="cart-items">{items.length} items</div>
  ),
}));

vi.mock("@/components/Form/ShippingForm", () => ({
  ShippingForm: () => <div data-testid="shipping-form">Shipping Form</div>,
}));

vi.mock("@/components/Form/PaymentForm", () => ({
  PaymentForm: () => <div data-testid="payment-form">Payment Form</div>,
}));

const cartItems = [
  {
    ...PRODUCTS[0],
    quantity: 1,
    selectedSize: PRODUCTS[0]?.sizes[0],
    selectedColor: PRODUCTS[0]?.colors[0],
  },
];

describe("CartStepContent", () => {
  it("renders cart items for the first step", () => {
    renderWithProviders(
      <CartStepContent
        activeStep="1"
        shippingForm={null}
        setShippingForm={vi.fn()}
      />,
    );

    expect(screen.getByTestId("cart-items")).toHaveTextContent("1 items");
  });

  it("renders the shipping form for the second step", () => {
    renderWithProviders(
      <CartStepContent
        activeStep="2"
        shippingForm={null}
        setShippingForm={vi.fn()}
      />,
    );

    expect(screen.getByTestId("shipping-form")).toBeInTheDocument();
  });

  it("renders the payment form for the third step when shipping data exists", () => {
    renderWithProviders(
      <CartStepContent
        activeStep="3"
        shippingForm={{
          name: "John Doe",
          email: "john@example.com",
          phone: "1234567",
          address: "123 Main St",
          city: "Yerevan",
        }}
        setShippingForm={vi.fn()}
      />,
    );

    expect(screen.getByTestId("payment-form")).toBeInTheDocument();
  });

  it("shows the fallback message when payment step is reached without shipping data", () => {
    renderWithProviders(
      <CartStepContent
        activeStep="3"
        shippingForm={null}
        setShippingForm={vi.fn()}
      />,
    );

    expect(
      screen.getByText("Please fill in the shipping form to continue."),
    ).toBeInTheDocument();
  });
});
