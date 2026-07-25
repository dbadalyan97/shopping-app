import "server-only";

import type { Dictionary } from "./types";

const dictionary = () =>
  import("./en.json").then((module) => module.default);

export type { Dictionary };

export const getDictionary = async (): Promise<Dictionary> => dictionary();
