import { IMovie, MoviesForFilmsPageT } from "@/types/types";
import { MOVIES_ACTIONS } from "./action-types";

export const getMovies = (movies: IMovie[]) => {
  return {
    type: MOVIES_ACTIONS.GET_MOVIES,
    payload: movies,
  };
};

export const getMoviesData = (data: MoviesForFilmsPageT) => {
  return {
    type: MOVIES_ACTIONS.GET_MOVIES_DATA,
    payload: data,
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

export const getMoviesDataStart = () => {
  return {
    type: MOVIES_ACTIONS.GET_MOVIES_START,
  };
};

export const getMoviesDataAll = () => {
  return { type: MOVIES_ACTIONS.GET_MOVIES_DATA_ALL };
};
