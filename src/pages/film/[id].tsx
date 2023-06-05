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
import InfoMovie from "./InfoMovie";
import { getMovieWorker } from "@/Redux/movie/workers";

const breadcrumbs: Breadcrumb[] = [
  { item: "Фильмы", path: "/movies" },
  { item: "Комедии", path: "/movies" },
];

type Props = {
  movie: IMovie;
};

const CardId: NextPage<Props> = ({ movie }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);

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
        <InfoMovie className={styles.info} filmLang={movie.filmLang} />
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
  console.log(context);
  const movie = moviesData;
  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movie: movie },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const paths = [Array(3)].map((item) => ({
    params: { id: moviesData.id.toString(), lang: "ru" },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default CardId;
