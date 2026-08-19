import { PaymentFormInputs } from "@/types/form/paymentFormSchema";

export interface PaymentFormProps {
  setPaymentForm: (paymentForm: PaymentFormInputs) => void;
}
