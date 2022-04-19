module.exports = {
  siteMetadata: {
    title: `Woosung Blog`,
    description: `Developer Woosung Blog`,
    author: `Woosung kim`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `contents`,
    //     path: `${__dirname}/contents`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
