import { call, put } from "redux-saga/effects";
import { getMovies, getMoviesError } from "@/Redux/movies/actions";
import { IMovie } from "@/types/types";
import { movieApi } from "@/Redux/movies/worker";
import { setResultsFilter } from "@/Redux/filter/actions";

export function* getMoviesSaga() {
  try {
    const response: IMovie[] = yield call(movieApi);
    yield put(getMovies(response));
    yield put(setResultsFilter(response));
  } catch (error) {
    console.log("error in getMoviesSaga", error);
    yield put(getMoviesError(String(error)));
  }
}
