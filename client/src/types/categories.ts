import type { Dictionary } from "@/dictionary/types";
import { Category } from "@/enums";

export type CategoryKey = keyof Dictionary["categories"];

export interface CategoryType {
  key: CategoryKey;
  icon: React.ReactNode;
  slug: Category;
}

export type CategoriesType = CategoryType[];
