module.exports = {
	siteMetadata: {
		title: `Jon Haddow`,
		author: `Jon Haddow`,
	},
	plugins: [
		"gatsby-plugin-typescript",
		"gatsby-plugin-typescript-checker",
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700"],
				},
			},
		},
		"gatsby-plugin-typegen",
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ["develop"],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			},
		},
		`gatsby-plugin-sharp`,
		"gatsby-transformer-sharp",
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					},
					"gatsby-remark-emoji",
				],
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require("postcss-preset-env")({
						stage: 0,
						importFrom: "./src/utils/custom-media-queries.css",
					}),
				],
			},
		},
		"gatsby-plugin-css-modules-typings",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		"gatsby-plugin-use-query-params",
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
