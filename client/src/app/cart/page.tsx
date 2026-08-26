"use client";

import { CartDetails, CartStepContent, CartSteps } from "@/components/Cart";

import { useDictionary } from "@/hooks/useDictionary";

import { ShippingFormInputs } from "@/types/form/shippingFormSchema";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const CartPage = () => {
  const searchParams = useSearchParams();
  const { cart: cartInfo } = useDictionary();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs | null>(
    null,
  );
  const activeStep = searchParams.get("step") || "1";

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-medium">{cartInfo.title}</h1>
      <CartSteps activeStep={activeStep} />
      <div className="flex w-full flex-col gap-16 lg:flex-row">
        <CartStepContent
          activeStep={activeStep}
          shippingForm={shippingForm}
          setShippingForm={setShippingForm}
        />
        <CartDetails activeStep={activeStep} />
      </div>
    </div>
  );
};

export default CartPage;
