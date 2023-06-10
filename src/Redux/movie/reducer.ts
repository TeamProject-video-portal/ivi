import {
  AuthResponseType,
  IMovie,
  IMovieRes,
  RegistrationUserType,
} from "@/types/types";
import { MOVIE_DATA } from "./action-types";
import data from "@/data/One_film_response_v2.json";

const initialState: IMovieRes = data;

export const RegistrationUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MOVIE_DATA.GET_MOVIE_DATA:
      return action.type;

    case MOVIE_DATA.GET_MOVIE_DATA_START:
      return action.type;

    case MOVIE_DATA.GET_MOVIE_DATA_FAIL:
      return data;

    case MOVIE_DATA.GET_MOVIE_DATA_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
