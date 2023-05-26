import { IMovie } from "@/types/types";
import { MoviesActionTypes } from "./action-types";

export const getMovies = (movies: IMovie[]) => {
  return {
    type: MoviesActionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const getMoviesError = (error: string) => {
  return {
    type: MoviesActionTypes.SET_MOVIES_ERROR,
    payload: error,
  };
};
