"use client";

import { FC } from "react";
import { SearchBarProps } from "./types";
import { Search } from "lucide-react";
import { useDictionary } from "@/hooks/useDictionary";

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  const { searchBar } = useDictionary();

  return (
    <div className="hidden items-center gap-2 rounded-md p-1.5 ring-1 ring-gray-200 sm:flex">
      <Search className="size-4 text-gray-500" />
      <input
        id="search"
        placeholder={placeholder ?? searchBar.placeholder}
        className="text-sm outline-0"
      />
    </div>
  );
};

export default SearchBar;
