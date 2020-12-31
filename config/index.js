module.exports = {
  //-- SITE SETTINGS -----
  author: "@meoki",
  siteTitle: "Gatsby Portfolio Minimal",
  siteShortTitle: "Sáng The Meoki", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://meokisama.github.io",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio of Sáng", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.animenewsnetwork.com%2Fall%2Frss.xml%3Fann-edition%3Dsea",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  // Similar to the Arrticle above
  nyaaTorrent:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fotakukart.com%2Ffeed",
  shownTorrent: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Facebook, Twitter, Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/slytherinnn",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/meokiiii",
    },
    {
      name: "Github",
      url: "https://github.com/meokisama",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/meokisama",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
