module.exports = {
	extends: ["plugin:cypress/recommended"],
	plugins: ["cypress"],
	parserOptions: {
		project: "./cypress/tsconfig.json",
	},
};
