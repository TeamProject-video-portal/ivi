//@ts-nocheck
import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import {
  LanguageSwitcher,
  useLanguageQuery,
  useTranslation,
} from "next-export-i18n";
import en from "i18n/translations.en.json";
import ru from "i18n/translations.ru.json";
type Props = {};

const LanguageButton: FC = () => {
  const router = useRouter();
  const handleChangeLocale = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };
  const t = router.locale === "ru" ? ru : en;

  console.log(t);
  return (
    <div className={styles.buttons_lang}>
      {/* {t.buttons.watch} */}
      <button onClick={() => handleChangeLocale("en")}>
        <span>en</span>{" "}
      </button>
      <button onClick={() => handleChangeLocale("ru")}>
        <span>ru</span>
      </button>
      {/* <LanguageSwitcher lang="en">en</LanguageSwitcher> |{" "}
      <LanguageSwitcher lang="ru">ru</LanguageSwitcher> */}
    </div>
  );
};

export default LanguageButton;
