import { all, fork, takeEvery } from "redux-saga/effects";
import { getDataTopMoviesSaga } from "./top-movies-saga";
import { getMoviesSaga, watchMoviesSaga } from "./movies-saga";
//import { getMoviesSaga } from "./movies-saga";
import { watchFiltersSaga } from "./filter-saga";
import { getDataBannerSaga } from "./banner-saga";
import { getDataHomePageSaga } from "./home-page-saga";
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export function* rootSaga() {
  try {
    yield all([
      fork(getDataBannerSaga),
      fork(getDataTopMoviesSaga),
      //fork(getMoviesSaga),
      fork(watchFiltersSaga),
      fork(getDataHomePageSaga),
      fork(watchMoviesSaga),
    ]);
  } catch (e) {
    console.log("error in root saga", e);
  }
}
