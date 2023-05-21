/** @type {import('next').NextConfig} */
const nextConfig = {
  locales: ["en", "ru"],
  defaultLocale: "ru",
  mode: "development",
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
    domains: [
      "avatars.mds.yandex.net",
      "www.kinopoisk.ru",
      "st.kp.yandex.net",
      "kinopoiskapiunofficial.tech",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kinopoisk.ru",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
