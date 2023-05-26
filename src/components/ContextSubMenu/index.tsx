import { FC, ReactNode } from "react";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import styles from "./index.module.scss";
import { RiH2 } from "react-icons/ri";
import { genres } from "@/data/filters";

type ContextSubProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  title?: string;
};

export const ContextSubMenu: FC<ContextSubProps> = ({ children, className, title }) => {
  const { t } = useTranslation();

  return (
    <div className={[styles.submenu, className].join(" ")}>
      {title && <h2>{title}</h2>}
      <div className={styles.content}>
        <div>
          <h3>{t("contextSubMenu.genres")}</h3>
          <ul>
            {genres.map((item, index) => (
              <li key={`${item.title.length}-${index}`}>
                <Link href={"/"}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t("contextSubMenu.countries")}</h3>
          <ul>
            <li key={0}>
              <Link href={"/"}>Русские</Link>
            </li>
            <li key={1}>
              <Link href={"/"}>Зарубежные</Link>
            </li>
            <li key={2}>
              <Link href={"/"}>Советское кино</Link>
            </li>
          </ul>
          <h3>{t("contextSubMenu.years")}</h3>
          <ul>
            <li key={0}>
              <Link href={"/"}>Фильмы 2023 года</Link>
            </li>
            <li key={1}>
              <Link href={"/"}>Фильмы 2022 года</Link>
            </li>
            <li key={2}>
              <Link href={"/"}>Фильмы 2021 года</Link>
            </li>
            <li key={3}>
              <Link href={"/"}>Фильмы 2020 года</Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
