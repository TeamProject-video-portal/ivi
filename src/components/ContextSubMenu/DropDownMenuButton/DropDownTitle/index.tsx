import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "next-export-i18n";

export const DropDownTitle: FC = () => {
  return (
    <div className={styles.title}>
      <h3> Подписка Иви</h3>
      <p> Стоимость 4.99 $ в месяц, продление автоматическое</p>
    </div>
  );
};
