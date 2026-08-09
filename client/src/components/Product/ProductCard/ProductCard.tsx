"use client";

import { FC, useState } from "react";
import {
  ProductCardActions,
  ProductCardImage,
  ProductCardInfo,
  ProductColorSelect,
  ProductSizeSelect,
} from "./components";
import { ProductCardProps, ProductTypeChangeParams } from "./types";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
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
        <ProductCardActions price={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
