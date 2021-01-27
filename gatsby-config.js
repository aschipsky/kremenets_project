module.exports = {
  siteMetadata: {
    title: "kremenets",
    description: `kremenets`,
    author: `andry`,
    siteUrl: `localhost:8000`
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "gskStBlEXKx1RI348JZQ7Pb8LQ7SY__3GCCKuepj9W4",
        spaceId: "asui31hbn7bg",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "24124214124",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-smoothscroll",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
