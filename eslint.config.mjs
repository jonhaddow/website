import eslintConfigJH from "eslint-config-jonhaddow";
import pluginCypress from "eslint-plugin-cypress/flat";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  ...eslintConfigJH.base,

  ...eslintConfigJH.react,

  pluginCypress.configs.recommended,

  ...tailwind.configs["flat/recommended"],

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
