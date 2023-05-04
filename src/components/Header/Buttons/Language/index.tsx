//@ts-nocheck
import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "../../../../hooks/useTranslation";

type Props = {};

const LanguageButton: FC = () => {
  const router = useRouter();

  const handleChangeLocale = (lang: string) => {
    localStorage.setItem("lang", lang);
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div>
      <button
        className={styles.button_lang}
        onClick={() => handleChangeLocale("ru")}
      >
        <p className={styles.text}>RU</p>
      </button>
      <button
        className={styles.button_lang}
        onClick={() => handleChangeLocale("en")}
      >
        <p className={styles.text}>EN</p>
      </button>
    </div>
  );
};

export default LanguageButton;
