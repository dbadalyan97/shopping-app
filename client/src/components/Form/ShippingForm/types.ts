import { ShippingFormInputs } from "@/types/form/shippingFormSchema";

export interface ShippingFormProps {
  setShippingForm: (shippingForm: ShippingFormInputs) => void;
}
