import { ProductType } from "./product";

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: ProductType["sizes"][number];
  selectedColor: ProductType["colors"][number];
};

export type CartItemsType = CartItemType[];
