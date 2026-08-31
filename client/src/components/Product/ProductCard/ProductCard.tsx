"use client";

import { FC, useCallback, useState } from "react";
import {
  ProductCardActions,
  ProductCardImage,
  ProductCardInfo,
  ProductColorSelect,
  ProductSizeSelect,
} from "./components";
import { ProductCardProps, ProductTypeChangeParams } from "./types";
import { useCartStore } from "@/store";
import { useDictionary } from "@/hooks/useDictionary";
import { toast } from "react-toastify";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();
  const { notifications } = useDictionary();
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductTypeChange = ({
    type,
    value,
  }: ProductTypeChangeParams) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleAddToCart = useCallback(() => {
    addToCart({
      ...product,
      quantity: 1,
      selectedColor: productTypes.color,
      selectedSize: productTypes.size,
    });

    toast.success(notifications.addedToCart.replace("{name}", product.name));
  }, [
    addToCart,
    notifications.addedToCart,
    product,
    productTypes.color,
    productTypes.size,
  ]);

  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <ProductCardImage
        productId={product.id}
        name={product.name}
        imageSrc={product.images[productTypes.color] || ""}
      />
      <div className="flex flex-col gap-4 p-4">
        <ProductCardInfo
          name={product.name}
          shortDescription={product.shortDescription}
        />
        <div className="flex items-center justify-between gap-4 text-xs">
          <ProductSizeSelect
            sizes={product.sizes}
            onChange={handleProductTypeChange}
          />
          <ProductColorSelect
            colors={product.colors}
            selectedColor={productTypes.color}
            onChange={handleProductTypeChange}
          />
        </div>
        <ProductCardActions
          price={product.price}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
