import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { DescriptionCard } from "@/components/DescriptionCard";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import moviesData from "@/data/One_film_response_v2.json";
import { Comments } from "@/components/Comments";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { IMovie } from "@/types/types";
import { useTranslation } from "next-export-i18n";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import TrailerCard from "./TrailerCard";
import React, { useState } from "react";
import ActorsSlider from "@/components/Sliders/ActorsSlider";
import { TrailerModal } from "@/components/Modals/TrailerModal";
import WatchOnAllDevices from "./WatchOnAllDevices";
import axios from "axios";
import DetailsMovie from "../../components/InfoMovie/Details";
import InfoMovie from "@/components/InfoMovie";

const breadcrumbs: Breadcrumb[] = [
  { item: "Фильмы", path: "/movies" },
  { item: "Комедии", path: "/movies" },
];

const CardId: NextPage = ({ movie }: any) => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(movie);
  return (
    <div className={styles.container}>
      <Breadcrumbs breadcrumbs={breadcrumbs} type="pages" del="/" />
      <div className={styles.wrapper}>
        <TrailerCard
          filmPicture={movie.filmPoster}
          filmLink={movie.filmLink}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          className={styles.trailer}
        />
        <DescriptionCard
          filmAge={movie.filmAge}
          filmYear={movie.filmYear}
          filmLang={movie.filmLang}
          filmTime={movie.filmTime}
          countries={movie.countries}
          genres={movie.genres}
          className={styles.discription}
        />
        <ActorsSlider
          filmGrade={movie.filmGrade}
          actors={movie.actors || []}
          className={styles.slider_actors}
        />
        <InfoMovie className={styles.info} movie={movie} />
      </div>
      <Comments />
      <SimpleSlider
        title={t("sliders_title.watching_with_a_movie")}
        films={movie.similarFilms}
      />
      <SliderContinueBrowsing
        title={"Трейлеры и доп. материалы"}
        type={"summary"}
      />
      {isOpenModal && (
        <TrailerModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          trailer={movie.filmTrailer}
        />
      )}
      <WatchOnAllDevices
        filmLang={movie.filmLang}
        filmPicture={movie.filmPoster}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("context", context.params);
  const locale = context.params?.lang || "ru";
  const movieResponse = await axios.get(
    `http://84.201.131.92:5003/film/${context.params?.id}?lang=${locale}`
  );
  const movie = movieResponse.data as IMovie;
  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movie },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const locales = ["ru", "en"];

  const paths = locales.flatMap((locale) => {
    return [Array(3)].map((movie) => ({
      params: { id: moviesData.id.toString(), lang: locale },
    }));
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export default CardId;
