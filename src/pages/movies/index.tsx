import { useState, useEffect, useRef } from "react";
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
import { useTranslation } from "next-export-i18n";
import { GetStaticProps, GetServerSideProps, NextPage } from "next";
import GenresSlider from "@/components/Sliders/GenresSlider";
import { IMovie, IPerson, ISimpleMovie, SearchParamsType, SortType } from "@/types/types";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import PersonsSlider from "@/components/Sliders/PersonsSlider";
import personsData from "@/data/persons.json";
import dataFilms from "@/data/Search_films_v2.json";
import { connect, useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { wrapper } from "@/Redux/store";
import { MOVIES_ACTIONS } from "@/Redux/movies/action-types";
import { END } from "redux-saga";
import { selectFilters } from "@/Redux/filter/selectors";
import { selectHomePage } from "@/Redux/homePage/selectors";
import {
  setActorsFilter,
  setCountries,
  setDirectorsFilter,
  setGenres,
  setRating,
  setResultsFilter,
  setScore,
  setYears,
} from "@/Redux/filter/actions";
import { sortHandler } from "@/Redux/filter/worker";
import { filterRangesHandler } from "@/Redux/filter/worker";
import { useRouter } from "next/router";
import { Loader } from "@/components/Loader";

import { getMoviesDataAll, getMoviesDataStart } from "@/Redux/movies/actions";

import axios from "axios";

const Movies: NextPage = (context) => {
  const router = useRouter();
  //console.log("router", router);
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const truncText = <p>{t("descriptions.movies_description_trunc")}</p>;
  const fullText = (
    <>
      <p>{t("descriptions.movies_description_full_1")}</p>
      <p>{t("descriptions.movies_description_full_2")}</p>
      <p>{t("descriptions.movies_description_full_3")}</p>
      <p>{t("descriptions.movies_description_full_4")}</p>
    </>
  );

  const isMounted = useRef(false);
  const dispatch = useAppDispatch();
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
  const { movies } = useSelector(selectMovies);
  const { bestFilmsSet } = useSelector(selectMovies);

  const breadcrumbsBegin: Breadcrumb[] = [
    { item: "Мой Иви", path: "/" },
    {
      item: "Фильмы",
      path: `/movies?lang=${router.asPath.includes("lang=en") ? "en" : "ru"}`,
    },
  ];

  //////////////////////////
  const put = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await put(getMoviesDataAll());
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  ////////////////////
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>(breadcrumbsBegin);

  useEffect(() => {
    let row = "";

    if (genres.length) {
      row += " " + genres.join(", ");
      setBreadcrumbs((state) => {
        state[2] = {
          item: row,
          path: `/movies?lang=${router.asPath.includes("lang=en") ? "en" : "ru"}`,
        };
        return state;
      });
    } else {
      setBreadcrumbs((state) => {
        return [state[0], state[1]];
      });
    }
  }, [genres]);

  // useEffect(() => {
  //   setBreadcrumbs((state) => {
  //     state[0] = { item: t("header.my_ivi"), path: "/" };
  //     state[1] = {
  //       item: t("header.movies"),
  //       path: `/movies?lang=${router.asPath.includes("lang=en") ? "en" : "ru"}`,
  //     };
  //     return state;
  //   });
  // }, [router.asPath]);

  const setFiltersFromURLParams = (searchParams: URLSearchParams) => {
    if (searchParams.getAll("genre").length) {
      const genres = searchParams.getAll("genre");
      console.log("set filters from URLParams: genres", genres);
      for (const item of genres) {
        dispatch(setGenres(item));
      }
    }

    if (searchParams.has("country")) {
      const countries = searchParams.getAll("country");
      for (const item of countries) {
        dispatch(setCountries(item));
      }
    }

    if (searchParams.has("yearsMin") && searchParams.has("yearsMax")) {
      const min = Number(searchParams.get("yearsMin")) || 1940;
      const max = Number(searchParams.get("yearsMax")) || 2023;
      dispatch(setYears([min, max]));
    }

    if (searchParams.has("ratingMin") && searchParams.has("ratingMax")) {
      const min = Number(searchParams.get("ratingMin")) || 4.0;
      const max = Number(searchParams.get("ratingMax")) || 10.0;
      dispatch(setRating([min, max]));
    }

    if (searchParams.has("scoreMin") && searchParams.has("scoreMax")) {
      const min = Number(searchParams.get("scoreMin")) || 10000;
      const max = Number(searchParams.get("scoreMax")) || 1000000;
      dispatch(setScore([min, max]));
    }

    if (searchParams.has("actor")) {
      const actors = searchParams.getAll("actor");
      for (const item of actors) {
        dispatch(setActorsFilter(item));
      }
    }

    if (searchParams.has("director")) {
      const directors = searchParams.getAll("director");
      for (const item of directors) {
        dispatch(setDirectorsFilter(item));
      }
    }
  };

  const setSearchParams = (pathname: string, params: SearchParamsType) => {
    console.log("set params to URL, params.genres:", params.genres);
    const newSearchParams = new URLSearchParams();

    if (params.lang) {
      newSearchParams.append("lang", params.lang);
    }

    if (params.genres) {
      for (const item of params.genres) {
        newSearchParams.append("genre", item);
      }
    }

    if (params.countries) {
      for (const item of params.countries) {
        newSearchParams.append("country", item);
      }
    }

    if (params.yearsMin) {
      newSearchParams.set("yearsMin", String(params.yearsMin));
    }

    if (params.yearsMax) {
      newSearchParams.set("yearsMax", String(params.yearsMax));
    }

    if (params.ratingMin) {
      newSearchParams.set("ratingMin", String(params.ratingMin));
    }

    if (params.ratingMax) {
      newSearchParams.set("ratingMax", String(params.ratingMax));
    }

    if (params.scoreMin) {
      newSearchParams.set("scoreMin", String(params.scoreMin));
    }

    if (params.scoreMax) {
      newSearchParams.set("scoreMax", String(params.scoreMax));
    }

    if (params.actors) {
      for (const item of params.actors) {
        newSearchParams.append("actor", item);
      }
    }

    if (params.directors) {
      for (const item of params.directors) {
        newSearchParams.append("director", item);
      }
    }

    router.push(`${pathname}${newSearchParams.toString() ? "?" : ""}${newSearchParams.toString()}`);
  };

  useEffect(() => {
    const queryURL = router.asPath.split("?", 2)[1];
    const searchParams: URLSearchParams = new URLSearchParams(queryURL);

    if (!isMounted.current) {
      if (router.asPath.includes("?")) {
        setFiltersFromURLParams(searchParams);
      }
    } else {
      console.log("set params to URL");
      const lang = searchParams.get("lang");
      !isFilter
        ? setSearchParams(router.pathname, { lang })
        : setSearchParams(router.pathname, {
            lang,
            genres,
            countries,
            yearsMin,
            yearsMax,
            ratingMin,
            ratingMax,
            scoreMin,
            scoreMax,
            actors,
            directors,
          });
    }
    isMounted.current = true;
  }, [
    genres,
    countries,
    yearsMin,
    yearsMax,
    ratingMin,
    ratingMax,
    scoreMin,
    scoreMax,
    actors,
    directors,
  ]);

  useEffect(() => {
    console.log("change sort");
    let resultFilter = sortHandler(sort, results);
    dispatch(setResultsFilter(resultFilter));
  }, [sort]);

  return (
    <>
      <Head>
        <title>{t("filters.search_movies")}</title>
      </Head>
      {isLoading && <Loader type="loading_page" />}

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
            films={bestFilmsSet as ISimpleMovie[]}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
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
              <MovieResults />
            ) : (
              <div className={styles.resultsEmpty}>{t("filters.not_found")}</div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

//export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const movies = dataFilms as ISimpleMovie[];
  const persons = personsData.persons;
  //const { data } = await axios.get(`https://84.201.131.92:5003/movies?lang=ru`);

  // store.dispatch({
  //   type: MOVIES_ACTIONS.GET_MOVIES_DATA,
  //   payload: data,
  // });

  store.dispatch({
    type: MOVIES_ACTIONS.GET_MOVIES,
    payload: movies,
  });

  return {
    //props: { persons, movies },
    props: {},
    //revalidate: 10,
  };
});

export default connect((state) => state)(Movies);
//export default Movies;
