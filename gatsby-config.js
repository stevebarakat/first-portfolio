module.exports = {
  siteMetadata: {
    title: `Steve Barakat | Front End Web Developer `,
    description: `Portfolio`,
    author: `@s.barakat`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.js`)
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Life+Savers:wght@400;700', 'Mystery+Quest']
        }
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        includedRoutes: ["/*/*/pages", "/*/*/media", "/*/*/menus", "/*/*/posts"],
        excludedRoutes: [
          "/*/*/categories",
          // "/*/*/posts",
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
        ],
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `painreliefdoctororangepark.com/blog`,
        // The protocol. This can be http or https.
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://localhost:8000/",
          replacementUrl: "http://painreliefdoctororangepark.com/blog/",
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`
  ],
}