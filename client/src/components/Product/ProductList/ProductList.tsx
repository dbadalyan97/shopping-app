import Link from "next/link";
import { Categories } from "../Categories";
import { ProductCard } from "../ProductCard";
import { PRODUCTS } from "@/constants";
import { FC } from "react";
import ProductListProps from "./types";
import { Filter } from "@/components/Filter";

const ProductList: FC<ProductListProps> = ({ category, path }) => {
  return (
    <div className="w-full">
      <Categories />
      {path === "products" && <Filter />}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products?category=${category}` : "/products"}
        className="mt-4 flex justify-end text-sm text-gray-500 underline"
      >
        View All Products
      </Link>
    </div>
  );
};

export default ProductList;
