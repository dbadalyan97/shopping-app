import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = [
  nextPlugin.flatConfig.recommended,
  nextPlugin.flatConfig.coreWebVitals,
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**"],
  },
];

export default eslintConfig;
