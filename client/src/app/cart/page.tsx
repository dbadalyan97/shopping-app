"use client";

import { CartDetails, CartStepContent, CartSteps } from "@/components/Cart";
import { PRODUCTS } from "@/constants";
import { useDictionary } from "@/hooks/useDictionary";
import { CartItemsType } from "@/types/cart";
import { ShippingFormInputs } from "@/types/form/shippingFormSchema";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const cartItems: CartItemsType = PRODUCTS.reduce((acc, product) => {
  acc[product.id] = {
    ...product,
    quantity: Math.floor(Math.random() * 10) + 1,
    selectedSize:
      product.sizes[Math.floor(Math.random() * product.sizes.length)],
    selectedColor:
      product.colors[Math.floor(Math.random() * product.colors.length)],
  };
  return acc;
}, []);

const CartPage = () => {
  const searchParams = useSearchParams();
  const { cart } = useDictionary();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs | null>(
    null,
  );
  const activeStep = searchParams.get("step") || "1";

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-medium">{cart.title}</h1>
      <CartSteps activeStep={activeStep} />
      <div className="flex w-full flex-col gap-16 lg:flex-row">
        <CartStepContent
          activeStep={activeStep}
          cartItems={cartItems}
          shippingForm={shippingForm}
          setShippingForm={setShippingForm}
        />
        <CartDetails cartItems={cartItems} activeStep={activeStep} />
      </div>
    </div>
  );
};

export default CartPage;
