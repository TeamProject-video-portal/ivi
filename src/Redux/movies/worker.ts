import { IMovie } from "@/types/types";

export const movieApi = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/movies`);
  const dataMovies = (await response.json()) as IMovie[];
  return dataMovies;
};
