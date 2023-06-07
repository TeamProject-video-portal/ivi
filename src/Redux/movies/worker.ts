import { IMovie } from "@/types/types";
import dataFilms from "@/data/Search_films_v2.json";
import { ISimpleMovie } from "@/types/types";
import axios from "axios";

export const movieApi = async () => {
  //const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/movies`);
  //const response = await fetch(`http://localhost:3000/api/movies`);
  //const dataMovies = (await response.json()) as IMovie[];
  // const body = {
  //   genres: ["драма", "биография"],
  //   countries: ["США", "Великобритания"],
  // };
  // const { data } = await axios.get(`https://84.201.131.92:5003/movies?lang=ru`);
  // return data;
  const dataMovies = dataFilms as ISimpleMovie[];
  return dataMovies;
};

export const movieAllApi = async () => {
  const { data } = await axios.get(`https://84.201.131.92:5003/movies?lang=ru`);
  return data;
};

export const editGenresApi = async () => {
  //  запрос к БД
  const dataMovies = dataFilms as ISimpleMovie[];
  return dataMovies;
};
