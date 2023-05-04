//@ts-nocheck
import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "../../../../hooks/useTranslation";

type Props = {};

const LanguageButton: FC = () => {
  const { setLocale, locale } = useTranslation();

  const router = useRouter();

  const handleChangeLocale = (lang: string) => {
    localStorage.setItem("lang", lang);
    router.push(router.pathname, router.asPath, { locale: lang });
    setLocale(lang);
  };

  return (
    <div>
      <select
        value={locale}
        name=""
        id=""
        onChange={(event) => {
          handleChangeLocale(event.target.value);
        }}
      >
        <option value="en">eng</option>
        <option value="ru">ru</option>
      </select>
    </div>
  );
};

export default LanguageButton;
