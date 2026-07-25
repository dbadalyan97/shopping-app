"use client";

import { FC } from "react";

import { DictionaryContext } from "@/context/DictionaryContext";
import { DictionaryProviderProps } from "./types";

const DictionaryProvider: FC<DictionaryProviderProps> = ({
  dictionary,
  children,
}) => {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryProvider;
