"use client";
import { FC, useState } from "react";
import { ProductInteractionProps } from "./types";
import { usePathname, useSearchParams } from "next/navigation";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDictionary } from "@/hooks/useDictionary";

const ProductInteraction: FC<ProductInteractionProps> = ({
  product,
  selectedSize,
  selectedColor,
}) => {
  const { productDetails, notifications } = useDictionary();
  const { addToCart } = useCartStore();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState<number>(1);

  const handleTypeChange = (type: "size" | "color", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "decrement" | "increment") => {
    if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increment") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    });
    toast.success(notifications.addedToCart.replace("{name}", product.name));
  };

  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">{productDetails.size}</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              key={size}
              className={`cursor-pointer border p-0.5 ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`flex size-6 items-center justify-center text-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">{productDetails.color}</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              key={color}
              className={`cursor-pointer border p-0.5 ${selectedColor === color ? "border-gray-500" : "border-white"}`}
              onClick={() => handleTypeChange("color", color)}
            >
              <div className="size-6" style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">{productDetails.quantity}</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border border-gray-300 p-1"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="size-4" />
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer border border-gray-300 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-lg"
      >
        <Plus className="size-4" />
        {productDetails.addToCart}
      </button>
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-800 shadow-lg ring-1 ring-gray-400"
      >
        <ShoppingCart className="size-4" />
        {productDetails.buyThisItem}
      </button>
    </div>
  );
};

export default ProductInteraction;
