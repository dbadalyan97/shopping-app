"use client";

import { CheckoutForm } from "@/components/Form/CheckoutForm";
import { useDictionary } from "@/hooks/useDictionary";
import {
  ShippingFormInputs,
  shippingFormSchema,
} from "@/types/form/shippingFormSchema";
import { SubmitHandler } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { ShippingFormProps } from "./types";
import { useRouter } from "next/navigation";
import { shippingFormFields } from "./constant";

const ShippingForm: FC<ShippingFormProps> = ({ setShippingForm }) => {
  const { cart, shippingForm } = useDictionary();
  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <CheckoutForm
      schema={shippingFormSchema}
      fields={shippingFormFields(shippingForm)}
      onSubmit={handleShippingForm}
      submitLabel={cart.continue}
      submitIcon={<ArrowRight className="size-3" />}
    />
  );
};

export default ShippingForm;
