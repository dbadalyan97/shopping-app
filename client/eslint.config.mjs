import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    extends: [eslintPluginTailwindcss.configs.recommended],
    settings: {
      tailwindcss:
        /** @type {import("eslint-plugin-tailwindcss").PluginSettings} */
        ({
          cssConfigPath: "./src/app/globals.css",
        }),
    },
    rules: {
      "tailwindcss/classnames-order": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
