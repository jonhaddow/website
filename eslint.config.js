const eslintConfigJH = require("eslint-config-jonhaddow");
const pluginCypress = require("eslint-plugin-cypress/flat");
const tailwind = require("eslint-plugin-tailwindcss");

module.exports = [
  ...eslintConfigJH.base,

  ...eslintConfigJH.react,

  pluginCypress.configs.recommended,

  ...tailwind.configs["flat/recommended"],

  {
    files: ["**/*.{tsx,ts}"],

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
