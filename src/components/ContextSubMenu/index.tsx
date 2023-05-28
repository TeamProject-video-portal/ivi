import { FC, ReactNode } from "react";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import styles from "./index.module.scss";
import { RiH2 } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { setGenres, setYears, setCountries } from "@/Redux/filter/actions";

type ContextSubProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  title?: string;
};

export const ContextSubMenu: FC<ContextSubProps> = ({ children, className, title }) => {
  const { t } = useTranslation();
  const { genres, countries } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  return (
    <div className={[styles.submenu, className].join(" ")}>
      {title && <h2>{title}</h2>}
      <div className={styles.content}>
        <div>
          <h3>{t("contextSubMenu.genres")}</h3>
          <ul>
            {genres.map((item, index) => (
              <li key={`${item.length}-${index}`} onClick={() => dispatch(setGenres(item))}>
                <Link href={"/movies"}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t("contextSubMenu.countries")}</h3>
          <ul>
            <li key={0} onClick={() => dispatch(setCountries("Россия"))}>
              <Link href={"/movies"}>Русские</Link>
            </li>
            <li key={1} onClick={() => dispatch(setCountries("США"))}>
              <Link href={"/movies"}>Американские</Link>
            </li>
            <li key={2} onClick={() => dispatch(setCountries("СССР"))}>
              <Link href={"/movies"}>Советские</Link>
            </li>
          </ul>
          <h3>{t("contextSubMenu.years")}</h3>
          <ul>
            <li key={0} onClick={() => dispatch(setYears([2023, 2023]))}>
              <Link href={"/movies"}>Фильмы 2023 года</Link>
            </li>
            <li key={1} onClick={() => dispatch(setYears([2022, 2022]))}>
              <Link href={"/movies"}>Фильмы 2022 года</Link>
            </li>
            <li key={2} onClick={() => dispatch(setYears([2021, 2021]))}>
              <Link href={"/movies"}>Фильмы 2021 года</Link>
            </li>
            <li key={3} onClick={() => dispatch(setYears([2020, 2020]))}>
              <Link href={"/movies"}>Фильмы 2020 года</Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
