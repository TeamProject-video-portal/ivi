import { call, put } from "redux-saga/effects";
import { getMovies, getMoviesError } from "@/Redux/movies/actions";
import { IMovie } from "@/types/types";
import { movieApi } from "@/Redux/movies/worker";

export function* getMoviesSaga() {
  try {
    const response: IMovie[] = yield call(movieApi);
    yield put(getMovies(response));
  } catch (error) {
    console.log("error in moviesSaga", error);
    yield put(getMoviesError(String(error)));
  }
}
