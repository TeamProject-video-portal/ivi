import { IMovie } from "@/types/types";
import dataFilms from "@/data/Search_films_v2.json";
import { ISimpleMovie } from "@/types/types";

export const movieApi = async () => {
  //const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/movies`);
  //const response = await fetch(`http://localhost:3000/api/movies`);
  //const dataMovies = (await response.json()) as IMovie[];
  const dataMovies = dataFilms as ISimpleMovie[];
  return dataMovies;
};

export const editGenresApi = async () => {
  //  запрос к БД
  const dataMovies = dataFilms as ISimpleMovie[];
  return dataMovies;
};
