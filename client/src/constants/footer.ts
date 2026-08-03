import type { FooterSectionConfig } from "@/types";

export const FOOTER_SECTIONS: FooterSectionConfig[] = [
  {
    key: "links",
    links: [
      { href: "/", key: "homepage" },
      { href: "/", key: "contact" },
      { href: "/", key: "termsOfService" },
      { href: "/", key: "privacyPolicy" },
    ],
  },
  {
    key: "products",
    links: [
      { href: "/", key: "allProducts" },
      { href: "/", key: "newArrivals" },
      { href: "/", key: "bestSellers" },
      { href: "/", key: "sale" },
    ],
  },
  {
    key: "company",
    links: [
      { href: "/", key: "about" },
      { href: "/", key: "contact" },
      { href: "/", key: "blog" },
      { href: "/", key: "affiliateProgram" },
    ],
  },
];
