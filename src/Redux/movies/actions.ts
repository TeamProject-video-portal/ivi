import { IMovie } from "@/types/types";
import { MoviesActionTypes } from "./action-types";

export const getMovies = (movies: IMovie[]) => {
  return {
    type: MoviesActionTypes.GET_MOVIES,
    payload: movies,
  };
};

export const getMoviesError = (error: string) => {
  return {
    type: MoviesActionTypes.GET_MOVIES_ERROR,
    payload: error,
  };
};
