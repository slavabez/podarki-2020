/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/media/files`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/media/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `podarki`,
        path: `${__dirname}/media/podarki`
      }
    }
  ],
}
