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
  async getStaticPaths() {
    const { locales } = i18n;

    const paths = locales.flatMap((locale) => {
      return [
        {
          params: {
            locale,
          },
        },
      ];
    });

    return {
      paths,
      fallback: false,
    };
  },
  async getStaticProps({ params }) {
    return {
      props: {
        locale: params.locale,
      },
    };
  },
};

module.exports = nextConfig;
