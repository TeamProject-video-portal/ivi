const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
  localePath: path.resolve("./public/locales"),
};
