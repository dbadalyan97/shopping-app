import { ProductType } from "@/types";

export interface ProductCardProps {
  product: ProductType;
}

export type ProductTypeKey = "size" | "color";

export interface ProductTypeChangeParams {
  type: ProductTypeKey;
  value: ProductType["sizes"][0] | ProductType["colors"][0];
}

export type ProductTypeChangeHandler = (
  params: ProductTypeChangeParams,
) => void;
