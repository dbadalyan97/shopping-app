import { ProductColor, ProductSize, ProductType } from "@/types/product";

export interface ProductInteractionProps {
  product: ProductType;
  selectedSize: ProductSize;
  selectedColor: ProductColor;
}
