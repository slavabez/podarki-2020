module.exports = {
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
