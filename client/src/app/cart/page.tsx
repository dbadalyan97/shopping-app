"use client";

import { PaymentForm } from "@/components/Form/PaymentForm";
import { ShippingForm } from "@/components/Form/ShippingForm";
import { PRODUCTS } from "@/constants";
import { CartItemsType } from "@/types/cart";
import { ShippingFormInputs } from "@/types/form/shippingFormSchema";
import clsx from "clsx";
import { ArrowRightIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const step = [
  {
    id: "1",
    title: "Shopping Cart",
  },
  {
    id: "2",
    title: "Shipping Address",
  },
  {
    id: "3",
    title: "Payment Method",
  },
];

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
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs | null>(
    null,
  );
  const activeStep = searchParams.get("step") || "1";

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
        {step.map((step) => (
          <div
            className={clsx(
              "flex items-center gap-2 border-b-2 border-gray-200 pb-4",
              { "border-gray-800": step.id === activeStep },
            )}
            key={step.id}
          >
            <div
              className={clsx(
                "flex size-6 items-center justify-center rounded-full bg-gray-200 p-4 text-white",
                { "bg-gray-800": step.id === activeStep },
              )}
            >
              {step.id}
            </div>
            <p
              className={clsx("text-sm font-medium text-gray-400", {
                "text-gray-800": step.id === activeStep,
              })}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col gap-16 lg:flex-row">
        <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-7/12">
          {activeStep === "1" ? (
            cartItems.map((item) => (
              <div className="flex items-center justify-between" key={item.id}>
                <div className="flex gap-8">
                  <div className="relative size-32 overflow-hidden rounded-lg bg-gray-50">
                    <Image
                      src={item.images[item.selectedColor] || ""}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                </div>
                <button className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-400 transition-all duration-300 hover:bg-red-200">
                  <Trash2 className="size-3" />
                </button>
              </div>
            ))
          ) : activeStep === "2" ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === "3" && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              Please fill in the shipping form to continue.
            </p>
          )}
        </div>
        <div className="flex h-max w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-7/12">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount( 10%)</p>
              <p className="font-medium">$10</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping Fee</p>
              <p className="font-medium">$10</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="font-semibold text-gray-800">Total</p>
              <p className="font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === "1" && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all hover:bg-gray-900"
            >
              Continue <ArrowRightIcon className="size-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
