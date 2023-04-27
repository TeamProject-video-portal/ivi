/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      "/": { page: "/home" },
    };
  },
  images: {
    domains: ["cdn.iz.ru"],
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
};

module.exports = nextConfig;
