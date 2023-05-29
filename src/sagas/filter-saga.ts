import { FilterActionTypes } from "@/Redux/filter/action-types";
import { getErrorFilter, setResultsFilter } from "@/Redux/filter/actions";
import { filterApi } from "@/Redux/filter/worker";
import { IMovie } from "@/types/types";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { selectFilters } from "@/Redux/filter/selectors";

export function* watchFiltersSaga() {
  yield takeEvery(FilterActionTypes.SET_GENRES, filterMoviesSaga);
  yield takeEvery(FilterActionTypes.SET_COUNTRIES, filterMoviesSaga);
  yield takeEvery(FilterActionTypes.SET_YEARS, filterMoviesSaga);
  yield takeEvery(FilterActionTypes.SET_RATING, filterMoviesSaga);
  yield takeEvery(FilterActionTypes.SET_SCORE, filterMoviesSaga);
  yield takeEvery(FilterActionTypes.SET_ACTORS, filterMoviesSaga);
  yield takeEvery(FilterActionTypes.SET_DIRECTORS, filterMoviesSaga);
}

const delay = (time: number) =>
  new Promise((res, rej) => {
    setTimeout(res, time * 1000);
  });

export function* filterMoviesSaga() {
  yield delay(1);
  console.log("saga filter");
  const { genres, countries } = yield select((state) => state.filters);
  // сформировать строку поиска
  const params = [...genres, ...countries];
  try {
    const response: IMovie[] = yield call(filterApi, params);
    yield put(setResultsFilter(response));
  } catch (error) {
    console.log("error in getFilterSaga", error);
    yield put(getErrorFilter(String(error)));
  }
}
