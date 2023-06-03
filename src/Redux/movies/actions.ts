import { IMovie } from "@/types/types";
import { MOVIES_ACTIONS } from "./action-types";

export const getMovies = (movies: IMovie[]) => {
  return {
    type: MOVIES_ACTIONS.GET_MOVIES,
    payload: movies,
  };
};

export const getMoviesError = (error: string) => {
  return {
    type: MOVIES_ACTIONS.GET_MOVIES_ERROR,
    payload: error,
  };
};

export const editGenresAction = (genres: string[]) => {
  return {
    type: MOVIES_ACTIONS.EDIT_GENRES,
    payload: genres,
  };
};
