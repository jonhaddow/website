const emoji = require(`remark-emoji`);

module.exports = {
	siteMetadata: {
		title: `Jon Haddow`,
		author: `Jon Haddow`,
		description: "Jon Haddow's personal site",
		siteUrl: `https://jon.haddow.me`,
		twitterHandle: "@Haddowjon",
	},
	plugins: [
		{
			resolve: `gatsby-plugin-feed-mdx`,
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
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.edges.map(({ node }) => ({
								title: node.frontmatter.title,
								date: node.frontmatter.date,
								description:
									node.frontmatter.abstract || node.excerpt,
								date: node.frontmatter.date,
								url: `${site.siteMetadata.siteUrl}/blog/${node.frontmatter.slug}`,
								guid: `${site.siteMetadata.siteUrl}/blog/${node.frontmatter.slug}`,
								custom_elements: [
									{ "content:encoded": node.html },
								],
								categories: node.frontmatter.tags,
							}));
						},
						query: `
							{
								allMdx(
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
		"gatsby-plugin-react-svg",
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
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					},
				],
				remarkPlugins: [emoji],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `jon.haddow.me`,
				short_name: `Jon's site`,
				start_url: `/`,
				background_color: `#333`,
				theme_color: `#00796b`,
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
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://jon.haddow.me",
				sitemap: "https://jon.haddow.me/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		"gatsby-plugin-sitemap",
		"gatsby-plugin-use-query-params",
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		"gatsby-plugin-use-dark-mode",
		"gatsby-plugin-emotion",
	],
};
