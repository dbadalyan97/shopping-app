import { CartItem } from "@/components/Cart/CartItem";
import { FC } from "react";
import { CartItemsProps } from "./types";

const CartItems: FC<CartItemsProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default CartItems;
