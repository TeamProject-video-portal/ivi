import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { DescriptionCard } from "@/components/DescriptionCard";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import moviesData from "@/data/One_film_response_v2.json";

const breadcrumbs: Breadcrumb[] = [
  { item: "Фильмы", path: "/movies" },
  { item: "Комедии", path: "/movies" },
];

import { TrailerCard } from "./TrailerCard";
import Ad from "@/components/Header/DesktopMenu/SubMenu/Ad";
import { Comments } from "@/components/Comments";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { IMovie } from "@/types/types";
import { useTranslation } from "next-export-i18n";

type Props = {
  movie: IMovie;
};

const CardId: NextPage<Props> = ({ movie }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Breadcrumbs breadcrumbs={breadcrumbs} type="pages" del="/" />
      <div className={styles.wrapper}>
        <TrailerCard filmPicture={movie.filmPoster} />
        <DescriptionCard
          filmGrade={movie.filmGrade}
          filmAge={movie.filmAge}
          filmYear={movie.filmYear}
          filmLang={movie.filmLang}
          actors={movie.actors}
          filmTime={movie.filmTime}
          countries={movie.countries}
        />
      </div>
      <Comments />
      <SimpleSlider title={"С фильмом смотрят"} films={movie.similarFilms} />
      <SliderContinueBrowsing
        title={"Трейлеры и доп. материалы"}
        type={"summary"}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id || 0;
  const movie = moviesData as IMovie;

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

export const getStaticPaths: GetStaticPaths = async () => {
  const movie = moviesData;

  return {
    paths: [{ params: { id: `${movie.id}` } }],
    fallback: false,
  };
};

export default CardId;
