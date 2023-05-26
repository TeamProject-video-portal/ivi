import React, { FC } from "react";
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
import { ISimpleMovie, ResponseTopMovieKPType } from "@/types/types";
import { GetServerSideProps } from "next";
import { wrapper } from "@/Redux/store";
import { DATA_TOP_MOVIES } from "@/Redux/topTenMovies/action-types";
import { useSelector } from "react-redux";
import { selectTopMovies } from "@/Redux/topTenMovies/selectors";
import dataOneMovie from "@/data/One_film_response_v2.json";
type Props = {
  data: ResponseTopMovieKPType[];
};

const oneMovie = {
  id: dataOneMovie.id,
  poster: { previewUrl: dataOneMovie.filmPoster, url: dataOneMovie.filmPoster },
};
const SliderTopTen: FC = () => {
  const { t } = useTranslation();
  const dataTopMovie = useSelector(selectTopMovies);
  const newSettings = {
    ...settings,
    centerMode: false,
    slidesToShow: 5,
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={logo} alt=""></Image>
        <h4>{t("sliders_title.during_the_week")}</h4>
      </div>

      <Slider {...newSettings} className={styles.container}>
        {dataTopMovie.data?.map((item, i) => (
          <Link href={`/film/${item.id}`} key={item.id}>
            <PosterTopTen num={i + 1} key={`${item.id}`} film={item} />
          </Link>
        ))}
        {/* <Link href="/film/">
          <PosterTopTen num={10} film={oneMovie} />
        </Link> */}
      </Slider>
      <></>
    </div>
  );
};
export const gerServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    await store.dispatch({ type: DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES });

    return { props: {} };
  });

export default SliderTopTen;
