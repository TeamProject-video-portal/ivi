import { call, put, takeEvery, take } from "redux-saga/effects";
import { getMoviesData, getMoviesDataStart, getMoviesError } from "@/Redux/movies/actions";
import { IMovie, ISimpleMovie, MoviesForFilmsPageT } from "@/types/types";
import { movieAllApi, movieApi } from "@/Redux/movies/worker";
import { setResultsFilter } from "@/Redux/filter/actions";
import { editGenresApi } from "@/Redux/movies/worker";
import { MOVIES_ACTIONS } from "@/Redux/movies/action-types";

export function* getMoviesSaga() {
  yield put(getMoviesDataStart());
  console.log("start movies get saga");
  try {
    const responseMovies: MoviesForFilmsPageT = yield call(movieAllApi);
    //console.log("responseMovies", responseMovies);
    yield put(getMoviesData(responseMovies));
  } catch (error) {
    console.log("error in getMoviesSaga", error);
    yield put(getMoviesError(String(error)));
  }
}

export function* watchMoviesSaga() {
  yield takeEvery(MOVIES_ACTIONS.WATCH_EDIT_GENRE, editGenreSaga);
}

export function* editGenreSaga(args: any) {
  console.log("start saga edit genre");
  try {
    const response: any = yield call(editGenresApi, args);
    console.log("response", response);
  } catch (error) {
    console.log("error in editGenreSaga", error);
    yield put(getMoviesError(String(error)));
  }
}
