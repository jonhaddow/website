module.exports = {
	extends: [
		"jonhaddow",
		"jonhaddow/react",
		"jonhaddow/typescript",
		"plugin:cypress/recommended",
	],
	plugins: ["emotion", "cypress"],
	rules: {
		"emotion/jsx-import": "error",
	},
};
