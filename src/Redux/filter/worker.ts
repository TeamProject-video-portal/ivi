import { IMovie } from "@/types/types";
import dataFilms from "@/data/Search_films_v2.json";
import { ISimpleMovie } from "@/types/types";

export const filterApi = async (params: string[]) => {
  console.log("params", params);
  // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/movies`, { params: params });
  // return data;
  // const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/movies?${query}`);
  // const dataMovies = (await response.json()) as IMovie[];
  const dataMovies = dataFilms as ISimpleMovie[];
  return dataMovies;
};
