export type ProductColor = string;
export type ProductColors = [ProductColor, ...ProductColor[]];
export type ProductSize = string;
export type ProductSizes = [ProductSize, ...ProductSize[]];
export interface ProductType {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: ProductSizes;
  colors: ProductColors;
  images: Record<ProductColor, string>;
}

export type ProductsType = ProductType[];
