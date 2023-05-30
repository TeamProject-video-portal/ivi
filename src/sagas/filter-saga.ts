import { FilterActionTypes } from "@/Redux/filter/action-types";
import { getErrorFilter, setResultsFilter } from "@/Redux/filter/actions";
import { filterApi } from "@/Redux/filter/worker";
import { IMovie } from "@/types/types";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { selectFilters } from "@/Redux/filter/selectors";

export function* watchFiltersSaga() {
  yield takeEvery(FilterActionTypes.SET_GENRES, filterGenresSaga);
  yield takeEvery(FilterActionTypes.SET_COUNTRIES, filterCountriesSaga);
  // yield takeEvery(FilterActionTypes.SET_YEARS, filterMoviesSaga);
  // yield takeEvery(FilterActionTypes.SET_RATING, filterMoviesSaga);
  // yield takeEvery(FilterActionTypes.SET_SCORE, filterMoviesSaga);
  // yield takeEvery(FilterActionTypes.SET_ACTORS, filterMoviesSaga);
  // yield takeEvery(FilterActionTypes.SET_DIRECTORS, filterMoviesSaga);
}

export function* filterGenresSaga() {
  console.log("genres saga filter");
  const { genres } = yield select((state) => state.filters);

  try {
    const response: IMovie[] = yield call(filterApi, { genres: genres });
    yield put(setResultsFilter(response));
  } catch (error) {
    console.log("error in filterGenresSaga", error);
    yield put(getErrorFilter(String(error)));
  }
}

export function* filterCountriesSaga() {
  console.log("countries saga filter");
  const { countries } = yield select((state) => state.filters);

  try {
    const response: IMovie[] = yield call(filterApi, { countries: countries });
    yield put(setResultsFilter(response));
  } catch (error) {
    console.log("error in filterCountriesSaga", error);
    yield put(getErrorFilter(String(error)));
  }
}
