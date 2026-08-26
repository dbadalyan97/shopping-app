"use client";

import { useCartStore } from "@/store";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const ShoppingCart = () => {
  const { cart } = useCartStore();

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="size-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 flex size-4 items-center justify-center rounded-full bg-amber-400 text-xs font-medium text-gray-600">
        {cart.length}
      </span>
    </Link>
  );
};

export default ShoppingCart;
