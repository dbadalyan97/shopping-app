"use client";

import { useContext } from "react";

import type { Dictionary } from "@/dictionary/types";
import { DictionaryContext } from "@/context/DictionaryContext";

export function useDictionary(): Dictionary {
  const dictionary = useContext(DictionaryContext);

  if (!dictionary) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }

  return dictionary;
}
