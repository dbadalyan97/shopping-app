"use client";

import { CheckoutForm } from "@/components/Form/CheckoutForm";
import { useDictionary } from "@/hooks/useDictionary";
import {
  PaymentFormInputs,
  paymentFormSchema,
} from "@/types/form/paymentFormSchema";
import { SubmitHandler } from "react-hook-form";
import { ShoppingCart } from "lucide-react";
import { FC } from "react";
import { PaymentFormProps } from "./types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getPaymentFormFields, paymentFormImages } from "./constant";

const PaymentForm: FC<PaymentFormProps> = ({ setPaymentForm }) => {
  const { cart, paymentForm } = useDictionary();
  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    setPaymentForm(data);
    router.push("/cart?step=4", { scroll: false });
  };

  return (
    <CheckoutForm
      schema={paymentFormSchema}
      fields={getPaymentFormFields(paymentForm)}
      onSubmit={handlePaymentForm}
      submitLabel={cart.continue}
      submitIcon={<ShoppingCart className="size-3" />}
    >
      <div className="mt-4 flex items-center gap-2">
        {paymentFormImages.map(({ image, imageAlt }) => (
          <Image
            key={image}
            src={image}
            alt={imageAlt}
            width={50}
            height={25}
            className="rounded-md"
          />
        ))}
      </div>
    </CheckoutForm>
  );
};

export default PaymentForm;
