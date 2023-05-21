import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../images/icons/logo.svg";
import Link from "next/link";
import { Button } from "../Button/Button";
import { Actors } from "./Actors";
import { Raiting } from "./Raiting";
import { ActorsType, CountriesType, FilmLangType } from "@/types/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";
import GenresSlider from "../Sliders/GenresSlider";
import SimpleSlider from "../Sliders/SimpleSlider";
import ActorsSlider from "../Sliders/ActorsSlider";

type Props = {
  filmGrade: number;
  filmAge: string;
  filmYear: number;
  filmLang: FilmLangType[];
  actors: ActorsType[];
  filmTime: number;
  countries: CountriesType[];
};

export const DescriptionCard: FC<Props> = ({
  filmGrade,
  filmAge,
  filmYear,
  filmLang,
  actors,
  filmTime,
  countries,
}) => {
  const router = useRouter();
  const lang = router.query?.lang;

  const langFilm = filmLang.find((item) => {
    return item.lang === lang;
  });

  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>
        {langFilm?.filmName ? langFilm?.filmName : filmLang[0].filmName}{" "}
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
            return <span> {item.name}</span>;
          })}
          <span>Комедии</span>
          <span>Русские</span>
        </div>
        <div className={styles.row_buttons}>
          <div>
            <Button color={"darkbluegrey"} className={styles.button_full_hd}>
              FullHD
            </Button>
          </div>
          <div className={styles.watch_params}>
            <div className="nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"></div>
            <span>Рус</span>
          </div>

          <div className={styles.watch_params}>
            <div className="nbl-icon nbl-icon_player_subtitlesRegular_16 watchParams__nbl-icon"></div>
            <span>Рус</span>
          </div>
        </div>
      </div>

      <div className={styles.actors}>
        <Raiting filmGrade={filmGrade} />
        {/* <ActorsSlider actors={actors} /> */}
        {actors.slice(0, 4).map((item, index) => {
          return (
            <Actors img={item.photo} name={item.name} key={`${item.id}`} />
          );
        })}
      </div>
      <div className={styles.description}>
        <p>
          {langFilm?.filmDescription
            ? langFilm?.filmDescription
            : filmLang[0].filmDescription}
        </p>
      </div>
    </div>
  );
};
