export const CART_STEPS = [
  {
    id: "1",
    title: "Shopping Cart",
  },
  {
    id: "2",
    title: "Shipping Address",
  },
  {
    id: "3",
    title: "Payment Method",
  },
] as const;

export type CartStepId = (typeof CART_STEPS)[number]["id"];
