import { all, fork } from "redux-saga/effects";
import { getDataBannerSaga } from "./banner-saga";
import { getDataTopMoviesSaga } from "./top-movies-saga";
import { getMoviesSaga } from "./movies-saga";
import { getPersonsSaga } from "./persons-saga";
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export function* rootSaga() {
  try {
    yield all([
      fork(getDataBannerSaga),
      fork(getDataTopMoviesSaga),
      fork(getMoviesSaga),
      fork(getPersonsSaga),
    ]);
  } catch (e) {}
}
