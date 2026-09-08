import { CategoriesType } from "@/types";
import { Category } from "@/enums";
import {
  ShoppingBasket,
  Shirt,
  Footprints,
  Glasses,
  Briefcase,
  Venus,
  Hand,
} from "lucide-react";

export const CATEGORIES: CategoriesType = [
  {
    key: "all",
    icon: <ShoppingBasket className="size-4" />,
    slug: Category.All,
  },
  {
    key: "tShirts",
    icon: <Shirt className="size-4" />,
    slug: Category.TShirts,
  },
  {
    key: "shoes",
    icon: <Footprints className="size-4" />,
    slug: Category.Shoes,
  },
  {
    key: "accessories",
    icon: <Glasses className="size-4" />,
    slug: Category.Accessories,
  },
  {
    key: "bags",
    icon: <Briefcase className="size-4" />,
    slug: Category.Bags,
  },
  {
    key: "dresses",
    icon: <Venus className="size-4" />,
    slug: Category.Dresses,
  },
  {
    key: "jackets",
    icon: <Shirt className="size-4" />,
    slug: Category.Jackets,
  },
  {
    key: "gloves",
    icon: <Hand className="size-4" />,
    slug: Category.Gloves,
  },
];
