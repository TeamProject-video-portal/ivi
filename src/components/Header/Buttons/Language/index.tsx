//@ts-nocheck
import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import {
  LanguageSwitcher,
  useLanguageQuery,
  useTranslation,
} from "next-export-i18n";

type Props = {};

const LanguageButton: FC = () => {
  const router = useRouter();
  const handleChangeLocale = (lang: string) => {
    // localStorage.setItem("lang", lang);
    // router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div>
      <LanguageSwitcher lang="en">en</LanguageSwitcher> |{" "}
      <LanguageSwitcher lang="ru">ru</LanguageSwitcher>
      {/* <button
        className={styles.button_lang}
        onClick={() => handleChangeLocale("ru")}
      >
        <p className={styles.text}>RUjherbf</p>
      </button> */}
      {/* <button
        className={styles.button_lang}
        onClick={() => handleChangeLocale("en")}
      >
        <p className={styles.text}>EN</p>
      </button> */}
    </div>
  );
};

export default LanguageButton;
