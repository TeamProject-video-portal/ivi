import { BannerType, ResponseTopMovieKPType } from "@/types/types";
import { DATA_TOP_MOVIES } from "./action-types";
import topMovie from "@/data/top_movie.json";

export type TopMovieReducerT = {
  data: ResponseTopMovieKPType[];
};

const initialState: TopMovieReducerT = {
  data: topMovie.data,
};

export const topMovieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES_START:
      return action.type;

    case DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES:
      return { data: action.payload };

    case DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES_SUCCESS:
      return { data: action.payload };

    case DATA_TOP_MOVIES.GET_DATA_TOP_MOVIES_FAIL:
      return action.type;

    default:
      return state;
  }
};
