import React, { FC, useEffect, useState } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
import PosterTopTen from "@/components/Carts/TopTen";
import logo from "../../../images/icons/top10.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import { ResponseTopMovieKPType } from "@/types/types";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "@/Redux/RootState";
import { Loader } from "@/components/Loader";

const SliderTopTen = () => {
  const { t } = useTranslation();
  const movies = useSelector((store: RootState) => store.topMovies.data);
  console.log(movies);
  const router = useRouter();
  const newSettings = {
    ...settings,
    centerMode: false,
    slidesToShow: 5,
  };

  const [locale, setLocale] = useState<any>("ru");
  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={logo} alt=""></Image>
        <h4>{t("sliders_title.during_the_week")}</h4>
      </div>
      {!movies ? (
        <Loader className={styles.loading_top_movies} />
      ) : (
        <Slider {...newSettings} className={styles.container}>
          {(movies as ResponseTopMovieKPType[]).map((item, i) => (
            <Link href={`/film/${item.id}/?lang=${locale}`} key={item.id}>
              <PosterTopTen num={i + 1} key={`${item.id}`} film={item} />
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderTopTen;
