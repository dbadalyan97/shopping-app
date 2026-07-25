import { Dictionary } from "@/dictionary/types";
import { ReactNode } from "react";

export interface DictionaryProviderProps {
  dictionary: Dictionary;
  children: ReactNode;
}
