module.exports = {
  siteMetadata: {
    title: `Сказка - новогодние подарки 2021`,
    description: ``,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/media/files`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/media/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `podarki`,
        path: `${__dirname}/media/podarki`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:300,400,700`],
        display: `swap`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
