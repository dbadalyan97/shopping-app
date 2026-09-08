"use client";

import { CATEGORIES } from "@/constants";
import { Category } from "@/enums";
import { useDictionary } from "@/hooks/useDictionary";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedCategory = searchParams.get("category");
  const { categories } = useDictionary();

  const handleChange = (value: Category) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mb-4 grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-2 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {CATEGORIES.map((category) => (
        <div
          className={clsx(
            "flex cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-1",
            category.slug === selectedCategory ? "bg-white" : "text-gray-500",
          )}
          key={category.key}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {categories[category.key]}
        </div>
      ))}
    </div>
  );
};

export default Categories;
