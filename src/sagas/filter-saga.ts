import { FILTERS_ACTIONS } from "@/Redux/filter/action-types";
import { getErrorFilter, setResultsFilter } from "@/Redux/filter/actions";
import { filterApi } from "@/Redux/filter/worker";
import { IMovie } from "@/types/types";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { selectFilters } from "@/Redux/filter/selectors";

export function* watchFiltersSaga() {
  yield takeEvery(FILTERS_ACTIONS.SET_GENRES, filterMoviesSaga);
  yield takeEvery(FILTERS_ACTIONS.SET_COUNTRIES, filterMoviesSaga);
  // yield takeEvery(FILTERS_ACTIONS.SET_YEARS, filterMoviesSaga);
  // yield takeEvery(FILTERS_ACTIONS.SET_RATING, filterMoviesSaga);
  // yield takeEvery(FILTERS_ACTIONS.SET_SCORE, filterMoviesSaga);
  // yield takeEvery(FILTERS_ACTIONS.SET_ACTORS, filterMoviesSaga);
  // yield takeEvery(FILTERS_ACTIONS.SET_DIRECTORS, filterMoviesSaga);
}

export function* filterMoviesSaga() {
  console.log("saga filter");
  const { genres, countries } = yield select((state) => state.filters);
  const body = { genres: genres, countries: countries };

  try {
    const response: IMovie[] = yield call(filterApi, body);
    yield put(setResultsFilter(response));
  } catch (error) {
    console.log("error in getFilterSaga", error);
    yield put(getErrorFilter(String(error)));
  }
}
