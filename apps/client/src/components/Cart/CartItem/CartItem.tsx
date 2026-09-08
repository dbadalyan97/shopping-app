"use client";

import { useDictionary } from "@/hooks/useDictionary";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { CartItemProps } from "./types";
import { useCartStore } from "@/store";
import { toast } from "react-toastify";

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { productDetails } = useDictionary();
  const { removeFromCart } = useCartStore();

  const handleRemoveFromCart = () => {
    removeFromCart(item);
    toast.success(`${item.name} removed from cart`);
  };

  return (
    <div className="flex items-center justify-between">
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
              {productDetails.quantity}: {item.quantity}
            </p>
            <p className="text-xs text-gray-500">
              {productDetails.size}: {item.selectedSize}
            </p>
            <p className="text-xs text-gray-500">
              {productDetails.color}: {item.selectedColor}
            </p>
          </div>
          <p className="font-medium">${item.price}</p>
        </div>
      </div>
      <button
        onClick={handleRemoveFromCart}
        className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-400 transition-all duration-300 hover:bg-red-200"
      >
        <Trash2 className="size-3" />
      </button>
    </div>
  );
};

export default CartItem;
