import { FC } from "react";
import { ShoppingCart } from "lucide-react";
import { ProductCardActionsProps } from "./types";

const ProductCardActions: FC<ProductCardActionsProps> = ({ price }) => {
  return (
    <div className="flex items-center justify-between">
      <p>${price.toFixed(2)}</p>
      <button className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:bg-black hover:text-white">
        <ShoppingCart className="size-4" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardActions;
