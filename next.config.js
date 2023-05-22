/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["ru", "en"],
  //   defaultLocale: "ru",
  // },
  locales: ["en", "ru"],
  defaultLocale: "ru",
  mode: "development",
  useBrowserDefault: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
      // {
      //   source: "/ru",
      //   destination: "/home",
      //   locale: false,
      //   permanent: false,
      // },
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
