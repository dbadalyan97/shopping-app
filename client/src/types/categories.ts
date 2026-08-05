import type { Dictionary } from "@/dictionary/types";

export type CategoryKey = keyof Dictionary["categories"];

export interface CategoryType {
  key: CategoryKey;
  icon: React.ReactNode;
  slug: string;
}

export type CategoriesType = CategoryType[];
