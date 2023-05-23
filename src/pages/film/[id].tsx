import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { DescriptionCard } from "@/components/DescriptionCard";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
import moviesData from "@/data/One_film_response_v2.json";
import { Comments } from "@/components/Comments";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { IMovie } from "@/types/types";
import { useTranslation } from "next-export-i18n";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import TrailerCard from "./TrailerCard";
import FilmButtons from "./FilmButtons";

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
  console.log(movie);
  return (
    <div className={styles.container}>
      <Breadcrumbs breadcrumbs={breadcrumbs} type="pages" del="/" />
      <div className={styles.wrapper}>
        <TrailerCard filmPicture={movie.filmPoster} filmLink={movie.filmLink} />
        <div className={styles.info}>
          <DescriptionCard
            filmGrade={movie.filmGrade}
            filmAge={movie.filmAge}
            filmYear={movie.filmYear}
            filmLang={movie.filmLang}
            actors={movie.actors || []}
            filmTime={movie.filmTime}
            countries={movie.countries}
            genres={movie.genres}
          />
          <FilmButtons filmLink={movie.filmLink} />
        </div>
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
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const movie = moviesData as IMovie;

//   if (!movie) {
//     return {
//       notFound: true,
//     };
//   }

//   const isFilmPage = context.resolvedUrl === `/film/${context.query.id}`;

//   return {
//     props: {
//       movie: movie,
//       id: !isFilmPage ? null : context.query.id,
//       lang: !isFilmPage ? null : context.query.lang || null,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async (context) => {
  // const id = context.params?.id || 0;

  // const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/person/${id}`);
  // const person = await response.json() as IPerson;

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
  // const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/person`);
  // const data = await response.json() as IPerson[];

  const paths = [Array(3)].map((item) => ({
    params: { id: moviesData.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export default CardId;
