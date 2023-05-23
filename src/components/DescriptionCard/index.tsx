import { FC, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../images/icons/logo.svg";
import Link from "next/link";
import { Button } from "../Button/Button";
import { Actors } from "./Actors";
import { Raiting } from "./Raiting";
import {
  ActorsType,
  CountriesType,
  FilmLangType,
  GenresType,
} from "@/types/types";
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
  genres: GenresType[];
};

export const DescriptionCard: FC<Props> = ({
  filmGrade,
  filmAge,
  filmYear,
  filmLang,
  actors,
  filmTime,
  countries,
  genres,
}) => {
  const router = useRouter();

  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>
        {router.locale === "ru" ? filmLang[0].filmName : filmLang[1].filmName}{" "}
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
          {genres.slice(0, 2).map((item) => {
            return (
              <div className={styles.genres}>
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
          {filmLang.map((item) => {
            return (
              <div className={styles.watch_params}>
                <div className="nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"></div>
                <span>{item.lang}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.actors}>
        <Raiting filmGrade={filmGrade} />
        {actors.slice(0, 4).map((item, index) => {
          return (
            <Actors
              img={item.photo || ""}
              name={item.name}
              key={`${item.id}`}
            />
          );
        })}
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
