//@ts-nocheck
import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { LanguageSwitcher } from "next-export-i18n";

const LanguageButton: FC = () => {
  return (
    <div className={styles.buttons_lang}>
      <LanguageSwitcher lang="en">en</LanguageSwitcher> |{" "}
      <LanguageSwitcher lang="ru">ru</LanguageSwitcher>
    </div>
  );
};

export default LanguageButton;
