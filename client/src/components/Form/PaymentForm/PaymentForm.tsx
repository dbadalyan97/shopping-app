"use client";

import { useDictionary } from "@/hooks/useDictionary";
import {
  PaymentFormInputs,
  paymentFormSchema,
} from "@/types/form/paymentFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import { FC } from "react";
import { PaymentFormProps } from "./types";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm: FC<PaymentFormProps> = ({ setPaymentForm }) => {
  const { cart, paymentForm } = useDictionary();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });
  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    setPaymentForm(data);
    router.push("/cart?step=4", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs font-medium text-gray-500"
        >
          {paymentForm.cardHolder}
        </label>
        <input
          type="text"
          id="cardHolder"
          placeholder={paymentForm.cardHolderPlaceholder}
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs font-medium text-gray-500"
        >
          {paymentForm.cardNumber}
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder={paymentForm.cardNumberPlaceholder}
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs font-medium text-gray-500"
        >
          {paymentForm.expirationDate}
        </label>
        <input
          type="text"
          id="expirationDate"
          placeholder={paymentForm.expirationDatePlaceholder}
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-sm text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs font-medium text-gray-500"
        >
          {paymentForm.cvv}
        </label>
        <input
          type="text"
          id="cvv"
          placeholder={paymentForm.cvvPlaceholder}
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-sm text-red-500">{errors.cvv.message}</p>
        )}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Image
          src="/klarna.png"
          alt={paymentForm.klarnaAlt}
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt={paymentForm.cardsAlt}
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt={paymentForm.stripeAlt}
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all hover:bg-gray-900"
      >
        {cart.continue}
        <ShoppingCart className="size-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
