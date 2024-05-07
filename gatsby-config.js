module.exports = {
  siteMetadata: {
    title: `Jon Haddow`,
    author: `Jon Haddow`,
    description: "Jon Haddow's personal site",
    siteUrl: `https://jon.haddow.me`,
    twitterHandle: "@Haddowjon",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
    "gatsby-plugin-react-svg",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node }) => ({
                title: node.frontmatter.title,
                date: node.frontmatter.date,
                description: node.frontmatter.abstract || node.excerpt,
                url: `${site.siteMetadata.siteUrl}/blog/${node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}/blog/${node.frontmatter.slug}`,
                custom_elements: [{ "content:encoded": node.body }],
                categories: node.frontmatter.tags,
              }));
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    body
                    excerpt
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
            title: `Jon Haddow's blog RSS Feed`,
            site_url: `https://jon.haddow.me`,
          },
        ],
      },
    },
  ],
};
