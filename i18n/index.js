let en = require("./en.json");
let ru = require("./ru.json");

const i18n = {
  translations: {
    en: en.i18n,
    ru: ru.i18n,
  },
  defaultLang: "ru",
  useBrowserDefault: true,
};

module.exports = i18n;
