"use client";

import { CartItems } from "@/components/Cart/CartItems";
import { PaymentForm } from "@/components/Form/PaymentForm";
import { ShippingForm } from "@/components/Form/ShippingForm";
import { useDictionary } from "@/hooks/useDictionary";
import { FC } from "react";
import { CartStepContentProps } from "./types";

const CartStepContent: FC<CartStepContentProps> = ({
  activeStep,
  cartItems,
  shippingForm,
  setShippingForm,
}) => {
  const { cart } = useDictionary();

  return (
    <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-7/12">
      {activeStep === "1" ? (
        <CartItems items={cartItems} />
      ) : activeStep === "2" ? (
        <ShippingForm setShippingForm={setShippingForm} />
      ) : activeStep === "3" && shippingForm ? (
        <PaymentForm />
      ) : (
        <p className="text-sm text-gray-500">{cart.fillShippingForm}</p>
      )}
    </div>
  );
};

export default CartStepContent;
