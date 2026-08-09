import { ProductType } from "@/types";
import { ProductTypeChangeHandler } from "../../types";
import { ProductColor } from "@/types/product";

export interface ProductColorSelectProps {
  colors: ProductType["colors"];
  selectedColor: ProductColor;
  onChange: ProductTypeChangeHandler;
}
