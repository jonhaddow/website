import eslintConfigJH from "eslint-config-jonhaddow";
import astro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  {
    ignores: ["dist", "node_modules", ".astro", ".cache", "public"],
  },

  ...eslintConfigJH.base,

  ...eslintConfigJH.react,

  ...tailwind.configs["flat/recommended"],

  ...astro.configs.recommended,

  {
    files: ["**/*.{tsx,ts}"],

    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
