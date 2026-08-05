import type { Dictionary } from "@/dictionary/types";

export type ProductKey = keyof Dictionary["products"];
export type ProductColor = string;
export type ProductColors = [ProductColor, ...ProductColor[]];

export interface ProductType {
  id: number | string;
  key: ProductKey;
  price: number;
  sizes: string[];
  colors: ProductColors;
  images: Record<ProductColor, string>;
}

export type ProductsType = ProductType[];
