import { DATA_BANNER } from "@/Redux/banner/action-types";
import { bannerReducer } from "@/Redux/banner/reducer";
import { all, fork, takeEvery } from "redux-saga/effects";
import { getDataBannerSaga } from "./banner-saga";
import { getDataTopMoviesSaga } from "./top-movies-saga";
export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export function* rootSaga() {
  try {
    yield all([fork(getDataBannerSaga), fork(getDataTopMoviesSaga)]);
  } catch (e) {}
}
