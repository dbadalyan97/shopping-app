import { CartItemsType } from "@/types/cart";
import { ShippingFormInputs } from "@/types/form/shippingFormSchema";

export interface CartStepContentProps {
  activeStep: string;
  cartItems: CartItemsType;
  shippingForm: ShippingFormInputs | null;
  setShippingForm: (shippingForm: ShippingFormInputs) => void;
}
