"use client";
import { CartItem } from "@/components/Cart/CartItem";
import { FC } from "react";
import { useCartStore } from "@/store";

const CartItems: FC = () => {
  const { cart } = useCartStore();

  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default CartItems;
