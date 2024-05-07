const eslintConfigJH = require("eslint-config-jonhaddow");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat();

module.exports = [
  ...eslintConfigJH.base,

  ...eslintConfigJH.react,

  ...compat.extends(
    "plugin:tailwindcss/recommended",
    "plugin:cypress/recommended",
  ),

  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
