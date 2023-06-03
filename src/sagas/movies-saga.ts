import { call, put, takeEvery } from "redux-saga/effects";
import { getMovies, getMoviesError } from "@/Redux/movies/actions";
import { IMovie } from "@/types/types";
import { movieApi } from "@/Redux/movies/worker";
import { setResultsFilter } from "@/Redux/filter/actions";
import { editGenresApi } from "@/Redux/movies/worker";
import { MOVIES_ACTIONS } from "@/Redux/movies/action-types";

export function* getMoviesSaga() {
  try {
    const response: IMovie[] = yield call(movieApi);
    yield put(getMovies(response));
    //yield put(setResultsFilter(response));
  } catch (error) {
    console.log("error in getMoviesSaga", error);
    yield put(getMoviesError(String(error)));
  }
}

export function* watchMoviesSaga() {
  yield takeEvery(MOVIES_ACTIONS.EDIT_GENRES, editGenresSaga);
}

export function* editGenresSaga() {
  console.log("start saga edit genres");
  //const response = yield call(editGenresApi);
}
