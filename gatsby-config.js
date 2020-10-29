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
        fonts: [`Roboto:300,400,700`, `Montserrat:400,700`],
        display: `swap`,
      },
    },
    `simple-react-lightbox`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Сказка Подарки 2021`,
        short_name: `Подарки 2021`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e181fa`,
        display: `standalone`,
        icon: `static/logo.png`
      },
    },
    `gatsby-plugin-offline`,
  ],
};
