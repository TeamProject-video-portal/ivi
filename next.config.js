/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    localeDetection: false,
  },
  trailingSlash: true,
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

  images: {
    domains: ["cdn.iz.ru"],
  },
};

module.exports = nextConfig;
