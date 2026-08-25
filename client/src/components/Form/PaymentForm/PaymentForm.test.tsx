import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "@/test/test-utils";
import PaymentForm from "./PaymentForm";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

describe("PaymentForm", () => {
  beforeEach(() => {
    push.mockReset();
  });

  it("renders payment provider images", () => {
    renderWithProviders(<PaymentForm setPaymentForm={vi.fn()} />);

    expect(screen.getByAltText("klarnaAlt")).toBeInTheDocument();
    expect(screen.getByAltText("cardsAlt")).toBeInTheDocument();
    expect(screen.getByAltText("stripeAlt")).toBeInTheDocument();
  });

  it("shows validation errors when the form is submitted empty", async () => {
    const user = userEvent.setup();

    renderWithProviders(<PaymentForm setPaymentForm={vi.fn()} />);

    await user.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Card holder is required!")).toBeInTheDocument();
    expect(screen.getByText("Card number is required!")).toBeInTheDocument();
    expect(
      screen.getByText("Expiration date must be in MM/YY format!"),
    ).toBeInTheDocument();
    expect(screen.getByText("CVV is required!")).toBeInTheDocument();
  });

  it("submits valid payment data and routes to confirmation", async () => {
    const user = userEvent.setup();
    const setPaymentForm = vi.fn();

    renderWithProviders(<PaymentForm setPaymentForm={setPaymentForm} />);

    await user.type(screen.getByLabelText("Card Holder"), "John Doe");
    await user.type(screen.getByLabelText("Card Number"), "1234567890123456");
    await user.type(screen.getByLabelText("Expiration Date"), "12/26");
    await user.type(screen.getByLabelText("CVV"), "123");
    await user.click(screen.getByRole("button", { name: /continue/i }));

    expect(setPaymentForm).toHaveBeenCalledWith({
      cardHolder: "John Doe",
      cardNumber: "1234567890123456",
      expirationDate: "12/26",
      cvv: "123",
    });
    expect(push).toHaveBeenCalledWith("/cart?step=4", { scroll: false });
  });
});
