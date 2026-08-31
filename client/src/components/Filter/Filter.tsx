"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDictionary } from "@/hooks/useDictionary";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { filter } = useDictionary();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="my-6 flex items-center justify-end gap-2 text-sm text-gray-500">
      <span>{filter.sortBy}</span>
      <select
        name="sort"
        id="sort"
        className="rounded-sm p-1 shadow-md ring-1 ring-gray-300"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">{filter.newest}</option>
        <option value="oldest">{filter.oldest}</option>
        <option value="asc">{filter.priceLowToHigh}</option>
        <option value="desc">{filter.priceHighToLow}</option>
      </select>
    </div>
  );
};

export default Filter;
