/** @type {import('next').NextConfig} */
const { i18n } = require("./i18next.config");
const nextConfig = {
  i18n,
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      "/": { page: "/home" },
    };
  },
  images: {
    domains: ["cdn.iz.ru"],
  },
};

module.exports = nextConfig;
