import { PaymentFormInputs } from "@/types/form/paymentFormSchema";

export interface PaymentFormProps {
  setPaymentForm: (paymentForm: PaymentFormInputs) => void;
}

export interface PaymentFormImage {
  image: string;
  imageAlt: string;
}

export type PaymentFormImages = PaymentFormImage[];
