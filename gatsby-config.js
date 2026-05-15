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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jon.haddow.me`,
        short_name: `Jon's site`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#00796b`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-plugin-netlify",
  ],
};
