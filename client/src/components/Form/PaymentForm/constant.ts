import { FormFieldConfig } from "../CheckoutForm/types";
import { PaymentFormInputs } from "@/types/form/paymentFormSchema";
import type { Dictionary } from "@/dictionary/types";
import { PaymentFormImages } from "./types";

export const getPaymentFormFields = (
  paymentForm: Dictionary["paymentForm"],
): FormFieldConfig<PaymentFormInputs>[] => [
  {
    name: "cardHolder",
    label: paymentForm.cardHolder,
    placeholder: paymentForm.cardHolderPlaceholder,
  },
  {
    name: "cardNumber",
    label: paymentForm.cardNumber,
    placeholder: paymentForm.cardNumberPlaceholder,
  },
  {
    name: "expirationDate",
    label: paymentForm.expirationDate,
    placeholder: paymentForm.expirationDatePlaceholder,
  },
  {
    name: "cvv",
    label: paymentForm.cvv,
    placeholder: paymentForm.cvvPlaceholder,
  },
];

export const paymentFormImages: PaymentFormImages = [
  { image: "/klarna.png", imageAlt: "klarnaAlt" },
  { image: "/cards.png", imageAlt: "cardsAlt" },
  { image: "/stripe.png", imageAlt: "stripeAlt" },
];
