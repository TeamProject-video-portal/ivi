import {
  BannerType,
  ISimpleMovie,
  MoviesForSlidersOnHomePageT,
} from "@/types/types";
import { DATA_MOVIE } from "./action-types";

const initialState: any = {};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_MOVIE.GET_DATA_MOVIE_START:
      return action.type;
    case DATA_MOVIE.GET_DATA_MOVIE_FAIL:
      return action.type;
    case DATA_MOVIE.GET_DATA_MOVIE_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
