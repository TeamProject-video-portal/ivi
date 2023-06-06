import { DATA_MOVIE } from "./action-types";

export const getMovieStart = () => {
  return {
    type: DATA_MOVIE.GET_DATA_MOVIE_START,
  };
};
export const getDataMovieSuccess = (payload: any) => ({
  type: DATA_MOVIE.GET_DATA_MOVIE_SUCCESS,
  payload,
});
export const getMovieFail = () => ({
  type: DATA_MOVIE.GET_DATA_MOVIE_FAIL,
});
