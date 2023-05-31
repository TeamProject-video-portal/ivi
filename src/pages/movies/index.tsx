import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import Description from "@/components/Description";
import Suggestion from "@/components/Suggestion";
import Catalog from "@/components/Catalog";
import Carousel from "@/components/Catalog/Carousel";
import Poster from "@/components/Poster";
import Filters from "@/components/Filters";
import Sort from "@/components/Sort";
import MovieResults from "@/components/MovieResults";
import FiltersTitleRow from "@/components/Filters/FiltersTitleRow";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { GetStaticProps, GetServerSideProps, NextPage } from "next";
import GenresSlider from "@/components/Sliders/GenresSlider";
import { IMovie, IPerson, ISimpleMovie, SortType } from "@/types/types";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import PersonsSlider from "@/components/Sliders/PersonsSlider";
import personsData from "@/data/persons.json";
import dataFilms from "@/data/Search_films_v2.json";
import { connect, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { wrapper } from "@/Redux/store";
import { MOVIES_ACTIONS } from "@/Redux/movies/action-types";
import { END } from "redux-saga";
import { selectFilters } from "@/Redux/filter/selectors";
import { setResultsFilter } from "@/Redux/filter/actions";

// type MoviesProps = {
//   persons: IPerson[];
//   movies: ISimpleMovie[];
// };

//const Movies: NextPage<MoviesProps> = ({ persons, movies }) => {
const Movies: NextPage = () => {
  const { t } = useTranslation();

  const truncText = (
    <p>
      Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках
      чего-нибудь интересного? Стоит задержаться на ivi.ru – фильмов, которые собраны у нас, вам
      хватит надолго. Коллекция постоянно пополняется как...
    </p>
  );
  const fullText = (
    <>
      <p>
        Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках
        чего-нибудь интересного? Стоит задержаться на ivi.ru – фильмов, которые собраны у нас, вам
        хватит надолго. Коллекция постоянно пополняется как новыми фильмами, так и признанными
        шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных боевиков или
        поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других
        способах проведения досуга, и вы будете пересматривать любимые фильмы онлайн снова и снова!
      </p>
      <p>
        Выбор фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное,
        каким бы ни были его вкусы. Предпочитаете картины исключительно зарубежного производства? У
        нас их предостаточно: это и золотая классика Голливуда, и душевные французские комедии, и
        темпераментные итальянские драмы, и шумные индийские музыкальные фильмы. А может, вы патриот
        и любите российские фильмы? Что ж, и таких фильмов у нас немало. Что вам больше по вкусу –
        добрая старая классика или новинки кинопроката? Неважно, каким будет ваш ответ – у нас есть
        все, как картины эпохи зарождения кинематографа, так 2018 года и фильмы 2017.
      </p>
      <p>
        В нашем каталоге вы найдете любые жанры. Это и фильмы про любовь, и детективы, и боевики, и
        вестерны, и фантастика, и арт-хаус, и уморительные комедии, и фильмы про войну, и ужасы, и
        триллеры, и документалистика... Кроме «полного метра» на сайте представлены также
        короткометражные фильмы, а также иностранные и русские сериалы.
      </p>
      <p>
        Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре, система рубрикации
        поможет вам без труда сориентироваться и найти, например, лучшие драмы или лучший
        анимационный фильм онлайн. Не упустите замечательную возможность смотреть фильмы онлайн без
        регистрации, выбирая только то, что вам действительно интересно, и тогда, когда вам это
        удобно. Ведь это так просто и приятно!
      </p>
    </>
  );

  const {
    isFilter,
    genres,
    countries,
    yearsMin,
    yearsMax,
    ratingMin,
    ratingMax,
    scoreMin,
    scoreMax,
    actors,
    sort,
    directors,
    results,
  } = useAppSelector(selectFilters);
  const { movies } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const bestMovies = [...movies].sort((a, b) => b.filmGrade - a.filmGrade).slice(0, 15);

  const breadcrumbsBegin: Breadcrumb[] = [
    { item: `${t("header.my_ivi")}`, path: "/" },
    { item: `${t("header.movies")}`, path: "/movies" },
  ];

  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>(breadcrumbsBegin);

  useEffect(() => {
    let row = "";
    if (genres.length) {
      row += " " + genres.join(", ");
      setBreadcrumbs([...breadcrumbsBegin, { item: row, path: "/movies" }]);
    } else if (breadcrumbs.length > 2) {
      setBreadcrumbs([...breadcrumbsBegin]);
    }
  }, [genres]);

  const filterHandler = (movies: IMovie[]): IMovie[] => {
    return movies
      .filter((item) => item.filmYear >= yearsMin && item.filmYear <= yearsMax)
      .filter((item) => item.filmGrade >= ratingMin && item.filmGrade <= ratingMax);
    //.filter((item) => item.filmTotalGrade >= scoreMin && item.filmTotalGrade <= scoreMin);
  };

  const sortHandler = (sort: SortType, movies: IMovie[]): IMovie[] => {
    let res = [...movies];
    switch (sort) {
      case "SCORE":
        res.sort((a, b) => b.filmTotalGrade - a.filmTotalGrade);
        break;
      case "RATING":
        res.sort((a, b) => b.filmGrade - a.filmGrade);
        break;
      case "DATE":
        res.sort((a, b) => b.filmYear - a.filmYear);
        break;
      case "TITLE":
        res.sort((a, b) => a.filmLang[0].filmName.localeCompare(b.filmLang[0].filmName));
        break;
    }
    return res;
  };

  useEffect(() => {
    //let resulteFilter = results;
    let resultFilter = filterHandler(movies);
    resultFilter = sortHandler(sort, resultFilter);
    dispatch(setResultsFilter(resultFilter));
  }, [yearsMin, yearsMax, ratingMin, ratingMax, scoreMin, scoreMin]);

  useEffect(() => {
    let resultFilter = sortHandler(sort, results);
    dispatch(setResultsFilter(resultFilter));
  }, [sort]);

  return (
    <>
      <Head>
        <title>{t("filters.search_movies")}</title>
      </Head>
      <div className={styles.container}>
        <section className={styles.headerbar}>
          <Breadcrumbs breadcrumbs={breadcrumbs} type="pages" del="/" />
          {!isFilter && (
            <>
              <h1 className={styles.title}>{t("filters.movies_online")}</h1>
              <Description
                truncText={truncText}
                fullText={fullText}
                className={styles.description}
              />
            </>
          )}
          {isFilter && (
            <>
              <h1 className={styles.title}>{t("header.movies")}</h1>
              <FiltersTitleRow />
            </>
          )}
        </section>
        {!isFilter && (
          <div className={styles.suggestionRow}>
            <Suggestion />
          </div>
        )}
        {isFilter && (
          <div className={styles.sortRow}>
            <Sort />
          </div>
        )}
        <section className={styles.filtersRow}>
          <Filters />
        </section>
      </div>
      {!isFilter && (
        <section>
          <div className={styles.genresRow}>
            <h2 className={styles.genresRow__title}>{t("contextSubMenu.genres")}</h2>
            <GenresSlider />
          </div>
          <SimpleSlider
            title={t("sliders_title.top_movies")}
            films={bestMovies as ISimpleMovie[]}
          />
          <div className={styles.personRow}>
            <h2 className={styles.personRow__title}>{t("sliders_title.persons")} </h2>
            <PersonsSlider />
          </div>
        </section>
      )}
      {isFilter && (
        <section className={styles.container}>
          <div className={styles.resultsRow}>
            {results.length ? (
              <MovieResults movies={results} />
            ) : (
              <div className={styles.resultsEmpty}>Ничего не найдено</div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export const gerServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // const responsePersons = await fetch(`${process.env.NEXT_PUBLIC_HOST}/person`);
    // const persons = await responsePersons.json() as IPerson[];
    // const responseMovies = await fetch(`${process.env.NEXT_PUBLIC_HOST}/movies`);
    // const movies = await responseMovies.json() as IMovie[];
    // const persons = personsData.persons;
    const movies = dataFilms as ISimpleMovie[];

    store.dispatch({
      type: MOVIES_ACTIONS.GET_MOVIES,
      payload: movies,
    });

    // if (!persons || !movies) {
    //   return {
    //     notFound: true,
    //   };
    // }

    return {
      //props: { persons, movies },
      props: {},
      revalidate: 10,
    };
  },
);

export default connect((state) => state)(Movies);
//export default Movies;
