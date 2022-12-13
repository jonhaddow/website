module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["jonhaddow", "jonhaddow/react"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
};
