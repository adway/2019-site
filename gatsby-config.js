const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Adway S. Wadekar`,
    siteUrl: `https://adway.io`,
    description: `Adway Wadekar's website`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`
    }
  ]
};
