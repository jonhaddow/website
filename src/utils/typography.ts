/* eslint-disable @typescript-eslint/no-var-requires */
import Typography from "typography";

const kirkhamTheme = require("typography-theme-kirkham");

kirkhamTheme.baseFontSize = "18px";
kirkhamTheme.baseLineHeight = 1.8;
kirkhamTheme.googleFonts = [
	{
		name: "Bree Serif",
		styles: ["400", "700"],
	},
	{
		name: "Fira Sans",
		styles: ["400", "400i", "700", "700i"],
	},
];
kirkhamTheme.headerFontFamily = ["Bree Serif", "serif"];
kirkhamTheme.headerWeight = 700;
kirkhamTheme.bodyFontFamily = ["Fira Sans", "sans-serif"];

const typography = new Typography(kirkhamTheme);

export default typography;
