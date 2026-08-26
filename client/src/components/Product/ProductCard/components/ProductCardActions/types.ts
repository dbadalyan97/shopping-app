import { ProductType } from "@/types";

export interface ProductCardActionsProps {
  price: ProductType["price"];
  onAddToCart: () => void;
}
