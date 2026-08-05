import { CategoriesType } from "@/types";
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
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    key: "tShirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    key: "shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    key: "accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    key: "bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    key: "dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    key: "jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    key: "gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
