module.exports = {
	siteMetadata: {
		title: `Jon Haddow`,
		author: `Jon Haddow`,
		description: "Blog by Jon Haddow",
		siteUrl: `https://jon.haddow.me`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
				{
				  site {
					siteMetadata {
					  title
					  description
					  siteUrl
					  site_url: siteUrl
					}
				  }
				}
			  `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map(({ node }) => ({
								title: node.frontmatter.title,
								date: node.frontmatter.date,
								description: node.frontmatter.abstract || node.excerpt,
								date: node.frontmatter.date,
								url: `${site.siteMetadata.siteUrl}/blog/${node.frontmatter.slug}`,
								guid: `${site.siteMetadata.siteUrl}/blog/${node.frontmatter.slug}`,
								custom_elements: [{ "content:encoded": node.html }],
								categories: node.frontmatter.tags,
							}));
						},
						query: `
							{
								allMarkdownRemark(
									sort: { order: DESC, fields: [frontmatter___date] },
									filter: { fields: { type: { eq: "posts" } } }
								) {
									edges {
										node {
											excerpt
											html
											frontmatter {
												slug
												title
												date
												abstract
												tags
											}
										}
									}
								}
							}
						`,
						output: "/rss.xml",
						title: "Jon Haddow's blog RSS Feed",
					},
				],
			},
		},
		"gatsby-plugin-typescript",
		"gatsby-plugin-typescript-checker",
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
				path: `${__dirname}/content/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/content/posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/content/pages`,
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
					"gatsby-remark-twemoji-shortcut",
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
				name: `Jon Haddow's Website`,
				short_name: `Jon's Website`,
				start_url: `/`,
				background_color: `#333`,
				theme_color: `#48718c`,
				display: `minimal-ui`,
				icon: `content/images/favicon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [`/about`, `/blog`, `/blog/*`],
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
