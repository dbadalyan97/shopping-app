import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";

import { DictionaryProvider } from "@/provider/DictionaryProvider";
import dictionary from "@/dictionary/en.json";
import type { Dictionary } from "@/dictionary/types";

type CustomRenderOptions = Omit<RenderOptions, "wrapper"> & {
  dictionary?: Dictionary;
};

function createWrapper(dict: Dictionary) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <DictionaryProvider dictionary={dict}>{children}</DictionaryProvider>
    );
  };
}

export function renderWithProviders(
  ui: ReactElement,
  { dictionary: dict = dictionary, ...options }: CustomRenderOptions = {},
) {
  return render(ui, {
    wrapper: createWrapper(dict),
    ...options,
  });
}

export * from "@testing-library/react";
export { dictionary };
