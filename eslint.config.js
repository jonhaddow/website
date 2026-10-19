import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig(
  { ignores: ["dist", ".astro", ".cache", "public"] },
  js.configs.recommended,
  ts.configs.recommended,
  astro.configs.recommended,
  {
    files: ["worker/**/*.js"],
    languageOptions: { globals: globals.serviceworker },
  },
  { files: ["**/*.cjs"], languageOptions: { globals: globals.node } },
);
