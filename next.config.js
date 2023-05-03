/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  i18n: {
    locales: i18n.locales,
    defaultLocale: i18n.defaultLocale,
  },
  async redirects() {
    return [
      {
        source: "/", // automatically handles all locales
        destination: "/home", // automatically passes the locale on
        permanent: false,
      },
      {
        // this matches '/' since `en` is the defaultLocale
        source: "/en",
        destination: "/en/home",
        locale: false,
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  output: {
    exportPathMap: function () {
      return {
        "/": { page: "/home" },
      };
    },
  },
  images: {
    domains: ["cdn.iz.ru"],
  },
};

module.exports = nextConfig;
