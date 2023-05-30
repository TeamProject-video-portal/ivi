import { IMovie } from "@/types/types";
import dataFilms from "@/data/Search_films_v2.json";
import { ISimpleMovie } from "@/types/types";
import { select } from "redux-saga/effects";
import { useAppSelector } from "@/hooks/hooks";
import { selectFilters } from "./selectors";

export const filterApi = async (body?: any) => {
  // const { data } = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/movies`, body);
  // return data;

  // const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/movies?${query}`);
  // const dataMovies = (await response.json()) as IMovie[];
  const dataMovies = dataFilms as ISimpleMovie[];
  return dataMovies;
};
