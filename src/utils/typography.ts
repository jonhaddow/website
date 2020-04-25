/* eslint-disable @typescript-eslint/no-var-requires */
import Typography from "typography";

const codePlugin = require("typography-plugin-code").default;
const kirkhamTheme = require("typography-theme-kirkham");

kirkhamTheme.baseFontSize = "20px";
kirkhamTheme.plugins = [new codePlugin()];
kirkhamTheme.googleFonts = [
	{
		name: "Bree Serif",
		styles: ["400"],
	},
	{
		name: "Fira Sans",
		styles: ["400", "400i", "700", "700i"],
	},
];
kirkhamTheme.headerFontFamily = ["Bree Serif", "serif"];
kirkhamTheme.headerWeight = 400;
kirkhamTheme.bodyFontFamily = ["Fira Sans", "sans-serif"];

const typography = new Typography(kirkhamTheme);

export default typography;
