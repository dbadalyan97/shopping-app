"use client";

import Link from "next/link";
import { Categories } from "../Categories";
import { ProductCard } from "../ProductCard";
import { PRODUCTS } from "@/constants";
import { FC } from "react";
import ProductListProps from "./types";
import { Filter } from "@/components/Filter";
import { Path } from "@/enums";
import { useDictionary } from "@/hooks/useDictionary";

const ProductList: FC<ProductListProps> = ({ category, path }) => {
  const { products } = useDictionary();

  return (
    <div className="w-full">
      <Categories />
      {path === Path.Products && <Filter />}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products?category=${category}` : "/products"}
        className="mt-4 flex justify-end text-sm text-gray-500 underline"
      >
        {products.viewAll}
      </Link>
    </div>
  );
};

export default ProductList;
