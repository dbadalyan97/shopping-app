import "server-only";

const dictionary = () =>
  import("./dictionaries/en.json").then((module) => module.default);

export type Dictionary = Awaited<ReturnType<typeof dictionary>>;

export const getDictionary = async (): Promise<Dictionary> => dictionary();
