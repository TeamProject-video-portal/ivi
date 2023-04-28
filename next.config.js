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
};

module.exports = nextConfig;
