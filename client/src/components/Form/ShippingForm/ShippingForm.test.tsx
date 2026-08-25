import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, screen } from "@/test/test-utils";
import ShippingForm from "./ShippingForm";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

describe("ShippingForm", () => {
  beforeEach(() => {
    push.mockReset();
  });

  it("shows validation errors when the form is submitted empty", async () => {
    const user = userEvent.setup();

    renderWithProviders(<ShippingForm setShippingForm={vi.fn()} />);

    await user.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText("Name is required!")).toBeInTheDocument();
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    expect(
      screen.getByText("Phone number must be between 7 and 10 digits!"),
    ).toBeInTheDocument();
    expect(screen.getByText("Address is required!")).toBeInTheDocument();
    expect(screen.getByText("City is required!")).toBeInTheDocument();
  });

  it("submits valid shipping data and routes to payment", async () => {
    const user = userEvent.setup();
    const setShippingForm = vi.fn();

    renderWithProviders(<ShippingForm setShippingForm={setShippingForm} />);

    await user.type(screen.getByLabelText("Name"), "John Doe");
    await user.type(screen.getByLabelText("Email"), "john.doe@example.com");
    await user.type(screen.getByLabelText("Phone"), "1234567");
    await user.type(screen.getByLabelText("Address"), "123 Main St");
    await user.type(screen.getByLabelText("City"), "Yerevan");
    await user.click(screen.getByRole("button", { name: /continue/i }));

    expect(setShippingForm).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567",
      address: "123 Main St",
      city: "Yerevan",
    });
    expect(push).toHaveBeenCalledWith("/cart?step=3", { scroll: false });
  });
});
