import * as z from "zod";

export type PaymentFormType = z.infer<typeof paymentFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .string()
    .min(16, "Card number is required!")
    .max(16, "Card number must be 16 digits!"),
  expirationDate: z
    .string()
    .regex(/[0-9]{2}\/[0-9]{2}/, "Expiration date must be in MM/YY format!"),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV must be 3 digits!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
