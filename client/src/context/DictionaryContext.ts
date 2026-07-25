"use client";

import { createContext } from "react";

import type { Dictionary } from "@/dictionary/types";

export const DictionaryContext = createContext<Dictionary | null>(null);
