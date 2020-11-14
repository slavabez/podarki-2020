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
    {
      resolve: `@sentry/gatsby`,
      options: {
        dsn: "https://132b3113300544e1b4fd1b2c9f409255@o217771.ingest.sentry.io/5505464",
        sampleRate: 1.0
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-69266859-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
  ],
};
