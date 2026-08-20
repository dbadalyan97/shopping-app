"use client";

import { useDictionary } from "@/hooks/useDictionary";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { CartDetailsRow } from "./components";
import { CartDetailsProps } from "./types";

const DISCOUNT_AMOUNT = 10;
const SHIPPING_FEE = 10;

const formatPrice = (amount: number) => `$${amount.toFixed(2)}`;

const CartDetails: FC<CartDetailsProps> = ({ cartItems, activeStep }) => {
  const router = useRouter();
  const { cart } = useDictionary();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const summaryRows = [
    { label: cart.subtotal, value: formatPrice(subtotal) },
    { label: cart.discount, value: formatPrice(DISCOUNT_AMOUNT) },
    { label: cart.shippingFee, value: formatPrice(SHIPPING_FEE) },
  ];

  return (
    <div className="flex h-max w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-7/12">
      <h2 className="font-semibold">{cart.details}</h2>
      <div className="flex flex-col gap-4">
        {summaryRows.map((row) => (
          <CartDetailsRow key={row.label} {...row} />
        ))}
        <hr className="border-gray-200" />
        <CartDetailsRow
          label={cart.total}
          value={formatPrice(subtotal)}
          emphasized
        />
      </div>
      {activeStep === "1" && (
        <button
          onClick={() => router.push("/cart?step=2", { scroll: false })}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all hover:bg-gray-900"
        >
          {cart.continue} <ArrowRightIcon className="size-3" />
        </button>
      )}
    </div>
  );
};

export default CartDetails;
