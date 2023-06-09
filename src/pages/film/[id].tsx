import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { DescriptionCard } from "@/components/DescriptionCard";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import moviesData from "@/data/One_film_response_v2.json";
import { Comments } from "@/components/Comments";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { IMovieRes } from "@/types/types";
import { useTranslation } from "next-export-i18n";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import React, { useEffect, useState } from "react";
import ActorsSlider from "@/components/Sliders/ActorsSlider";
import { TrailerModal } from "@/components/Modals/TrailerModal";
import WatchOnAllDevices from "../../components/WatchOnAllDevices";
import axios from "axios";
import InfoMovie from "@/components/InfoMovie";
import { getContinueBrowsing } from "@/Redux/continue_browsing/actions";
import { useDispatch } from "react-redux";
import { Loader } from "@/components/Loader";
import dataForTrailers from "../../data/trailers_for_movie.json";
import TrailerCard from "@/components/TrailerCard";
import { getMovieData } from "@/Redux/movie/actions";

const CardId: NextPage = ({ movie }: any) => {
  const [id, setId] = useState<any>();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const put = useDispatch();
  const router = useRouter();
  const breadcrumbs: Breadcrumb[] = [
    { item: "Фильмы", path: "/movies" },
    { item: movie.genres[0].name, path: "/movies" },
  ];

  useEffect(() => {
    put(
      getContinueBrowsing({
        id: movie.id,
        poster: movie.filmPoster,
        name: {
          ruName: movie.filmLang[0].filmName,
          enName: movie.filmLang[1].filmName,
        },
        description: {
          ruName: movie.filmLang[0].filmDescription,
          enName: movie.filmLang[1].filmDescription,
        },
      })
    );
    setId(router.asPath);
    put(getMovieData({ id: router.query.id! }));
  }, []);

  //при изменения id фильма лоудер убирается
  useEffect(() => {
    if (router.asPath !== id) {
      setIsLoading(false);
    }
  }, [router]);
  console.log(movie.reviews);
  return (
    <div className={styles.container}>
      <Breadcrumbs breadcrumbs={breadcrumbs} type="pages" del="/" />

      {isLoading && <Loader type="loading_page" />}

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
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <InfoMovie className={styles.info} movie={movie} />
      </div>
      <Comments />
      <SimpleSlider
        title={t("sliders_title.watching_with_a_movie")}
        films={movie.similarFilms}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <SliderContinueBrowsing
        title={t("movie.trailers")}
        type={"detailed"}
        movies={dataForTrailers}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
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
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const locale = context.params?.lang || "ru";
  let movie: IMovieRes;

  try {
    const movieResponse = await axios.get(
      `https://84.201.131.92:5003/film/${context.params?.id}?lang=${locale}`,
      { httpsAgent: agent, timeout: 5000 }
    );
    movie = movieResponse.data;
  } catch (e) {
    movie = moviesData;
  }

  return {
    props: { movie },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const locales = ["ru", "en"];

  const paths = locales.flatMap((locale) => {
    return [Array(1)].map((movie) => ({
      params: { id: moviesData.id.toString(), lang: locale },
    }));
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export default CardId;
