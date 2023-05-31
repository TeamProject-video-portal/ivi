import { IMovie } from "@/types/types";
import dataFilms from "@/data/Search_films_v2.json";
import { ISimpleMovie } from "@/types/types";
import { select } from "redux-saga/effects";
import { useAppSelector } from "@/hooks/hooks";
import { selectFilters } from "./selectors";
import { SortType } from "@/types/types";

export const filterApi = async (body?: any) => {
  // const { data } = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/movies`, body);
  // return data;

  // const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/movies?${query}`);
  // const dataMovies = (await response.json()) as IMovie[];
  const dataMovies = dataFilms as ISimpleMovie[];
  return dataMovies;
};

export const filterRangesHandler = (
  movies: IMovie[],
  yearsMin: number,
  yearsMax: number,
  ratingMin: number,
  ratingMax: number,
  scoreMin?: number,
  scoreMax?: number,
): IMovie[] => {
  return movies
    .filter((item) => item.filmYear >= yearsMin && item.filmYear <= yearsMax)
    .filter((item) => item.filmGrade >= ratingMin && item.filmGrade <= ratingMax);
  //.filter((item) => item.filmTotalGrade >= scoreMin && item.filmTotalGrade <= scoreMax);
};

export const filterPersons = (movies: IMovie[], persons: string[], type: string): IMovie[] => {
  let res: IMovie[] = [];

  for (const film of movies) {
    if (type === "actors") {
      const findActors = film.actors?.filter((item) => persons.includes(item.name));
      if (findActors?.length) {
        res.push(film);
      }
    } else {
      const findDirectors = film.directors?.filter((item) => persons.includes(item.name));
      if (findDirectors?.length) {
        res.push(film);
      }
    }
  }

  return res;
};

export const sortHandler = (sort: SortType, movies: IMovie[]): IMovie[] => {
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
