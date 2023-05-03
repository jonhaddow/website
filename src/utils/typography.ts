import Typography, { TypographyOptions } from "typography";
import kirkhamTheme from "typography-theme-kirkham";
import CodePlugin from "typography-plugin-code";

const typographyOptions = kirkhamTheme as TypographyOptions;

typographyOptions.baseFontSize = "16px";
typographyOptions.baseLineHeight = 1.8;
typographyOptions.plugins = [new CodePlugin()];
typographyOptions.googleFonts = [
  {
    name: "Bree Serif",
    styles: ["400", "700"],
  },
  {
    name: "Fira Sans",
    styles: ["400", "400i", "700", "700i"],
  },
];
typographyOptions.headerFontFamily = ["Bree Serif", "serif"];
typographyOptions.headerWeight = 700;
typographyOptions.headerColor = "inherit";
typographyOptions.bodyFontFamily = ["Fira Sans", "sans-serif"];

const typography = new Typography(typographyOptions);

export default typography;
