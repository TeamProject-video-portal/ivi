/** @type {import('next').NextConfig} */
const nextConfig = {
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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
