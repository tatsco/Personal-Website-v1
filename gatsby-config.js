module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: false,
        anonymize: true,
      },
    },
  ],
};
