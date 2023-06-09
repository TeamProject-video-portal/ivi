import { call, put, takeEvery } from "redux-saga/effects";
import {
  getMovies,
  getMoviesData,
  getMoviesDataStart,
  getMoviesError,
} from "@/Redux/movies/actions";
import { IMovie, ISimpleMovie, MoviesForFilmsPageT } from "@/types/types";
import { movieAllApi, movieApi } from "@/Redux/movies/worker";
import { setResultsFilter } from "@/Redux/filter/actions";
import { editGenresApi } from "@/Redux/movies/worker";
import { MOVIES_ACTIONS } from "@/Redux/movies/action-types";

export function* getMoviesSaga() {
  yield put(getMoviesDataStart());
  try {
    // const response: IMovie[] = yield call(movieApi);
    // yield put(getMovies(response));
    const responseMovies: MoviesForFilmsPageT = yield call(movieAllApi);
    console.log("responseMovies", responseMovies);
    yield put(getMoviesData(responseMovies));
  } catch (error) {
    console.log("error in getMoviesSaga", error);
    yield put(getMoviesError(String(error)));
  }
}

// export function* watchMoviesSaga() {
//   yield takeEvery(MOVIES_ACTIONS.EDIT_GENRES, editGenresSaga);
// }

// export function* editGenresSaga() {
//   console.log("start saga edit genres");
//   try {
//     const response: IMovie[] = yield call(editGenresApi);
//   } catch (error) {
//     console.log("error in editGenresSaga", error);
//     yield put(getMoviesError(String(error)));
//   }
// }
