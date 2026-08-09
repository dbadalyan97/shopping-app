import { ProductType } from "@/types";
import { ProductTypeChangeHandler } from "../../types";

export interface ProductSizeSelectProps {
  sizes: ProductType["sizes"];
  onChange: ProductTypeChangeHandler;
}
