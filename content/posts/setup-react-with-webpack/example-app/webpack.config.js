var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: "babel-loader",
			},
		],
	},
	plugins: [new HtmlWebpackPlugin()],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
};
