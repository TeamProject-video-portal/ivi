import { FC, useContext } from "react";
import { LangStrings } from "../contexts/texts";
import { LanguageContext } from "../customProvider/LanguageProvider";

export const useTranslation = () => {
  const [locale, setLocale] = useContext(LanguageContext);

  const t = (key: string) => {
    return LangStrings[locale][key];
  };
  return { t, locale, setLocale };
};
