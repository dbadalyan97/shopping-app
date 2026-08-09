import { ProductType } from "@/types";

export interface ProductCardImageProps {
  productId: ProductType["id"];
  name: ProductType["name"];
  imageSrc: string;
}
