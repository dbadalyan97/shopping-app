export type ProductColor = string;
export type ProductColors = [ProductColor, ...ProductColor[]];

export interface ProductType {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: ProductColors;
  images: Record<ProductColor, string>;
}

export type ProductsType = ProductType[];
