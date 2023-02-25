module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // add style plugins below
    `gatsby-plugin-typography`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
