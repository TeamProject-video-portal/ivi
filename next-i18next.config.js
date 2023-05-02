const path = require("path");
module.exports = {
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
    defaultNS: "default",
    localePath: "./public/locales",
    localeExtension: "json",
    localeStructure: "{{lng}}/{{ns}}",
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
      typeof window === "undefined"
        ? require("path").resolve("./public/locales")
        : "/locales",
  },
};
