import { FC, useState } from "react";
import styles from "./index.module.scss";
import { Button } from "../Button/Button";
import { CountriesType, FilmLangType, GenresType } from "@/types/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";

type Props = {
  filmAge: string;
  filmYear: number;
  filmLang: FilmLangType[];
  filmTime: number;
  countries: CountriesType[];
  genres: GenresType[];
  className: string;
};

export const DescriptionCard: FC<Props> = ({
  filmAge,
  filmYear,
  filmLang,
  filmTime,
  countries,
  genres,
  className,
}) => {
  const router = useRouter();

  const { t } = useTranslation();
  return (
    <div className={[styles.container, className].join(" ")}>
      <h1>
        {router.asPath.includes("=en")
          ? filmLang[1].filmName
          : filmLang[0].filmName}{" "}
        {t("movie.watch_online")}
      </h1>
      <div className={styles.data}>
        <div className={styles.row_time}>
          <span>{filmYear}</span>
          <span>{filmTime} мин.</span>
          <span>{filmAge}+</span>
        </div>
        <div className={styles.row_theme}>
          {countries.map((item) => {
            return <span key={item.id}> {item.name}</span>;
          })}
          {genres.slice(0, 2).map((item) => {
            return (
              <div className={styles.genres} key={item.id}>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.row_buttons}>
          <div>
            <Button color={"darkbluegrey"} className={styles.button_full_hd}>
              FullHD
            </Button>
          </div>
          {filmLang.map((item, index) => {
            return (
              <div className={styles.watch_params} key={`${index}`}>
                <div className="nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"></div>
                <span>{item.lang}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.description}>
        <p>
          {router.locale === "ru"
            ? filmLang[0]?.filmDescription
            : filmLang[1].filmDescription}
        </p>
      </div>
    </div>
  );
};
