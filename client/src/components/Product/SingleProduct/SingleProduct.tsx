"use client";

import { paymentFormImages } from "@/components/Form/PaymentForm/constant";
import Image from "next/image";
import { FC } from "react";
import { SingleProductProps } from "./types";
import { ProductInteraction } from "@/components/Product/ProductInteraction";
import { useSearchParams } from "next/navigation";
import { useDictionary } from "@/hooks/useDictionary";

const SingleProduct: FC<SingleProductProps> = ({ product }) => {
  const searchParams = useSearchParams();
  const size = searchParams.get("size");
  const color = searchParams.get("color");
  const { singleProduct } = useDictionary();

  return (
    <div className="mt-12 flex flex-col gap-4 md:gap-12 lg:flex-row">
      <div className="relative aspect-2/3 w-full lg:w-5/12">
        <Image
          src={product.images[color || product.colors[0]] || ""}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-md object-contain"
        />
      </div>
      <div className="flex w-full flex-col gap-4 lg:w-7/12">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedColor={color?.toString() || product.colors[0]}
          selectedSize={size?.toString() || product.sizes[0]}
        />
        <div className="mt-4 flex items-center gap-2">
          {paymentFormImages.map(({ image, imageAlt }) => (
            <Image
              key={image}
              src={image}
              alt={imageAlt}
              width={50}
              height={25}
              className="rounded-md"
            />
          ))}
        </div>
        <p className="text-xs text-gray-500">
          {singleProduct.paymentNotice
            .replace("{terms}", "Terms & Conditions")
            .replace("{privacy}", "Privacy Policy")
            .replace("{refund}", "Refund Policies")}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
