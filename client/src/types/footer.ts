import type { Dictionary } from "@/dictionary/types";

export type FooterSectionKey = keyof Dictionary["footer"]["sections"];
export type FooterLinkKey = keyof Dictionary["footer"]["links"];

export type FooterLinkConfig = {
  href: string;
  key: FooterLinkKey;
};

export type FooterSectionConfig = {
  key: FooterSectionKey;
  links: FooterLinkConfig[];
};
