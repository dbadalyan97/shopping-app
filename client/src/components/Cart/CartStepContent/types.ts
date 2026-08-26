import { ShippingFormInputs } from "@/types/form/shippingFormSchema";

export interface CartStepContentProps {
  activeStep: string;
  shippingForm: ShippingFormInputs | null;
  setShippingForm: (shippingForm: ShippingFormInputs) => void;
}
