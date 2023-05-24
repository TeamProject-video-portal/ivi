import { DATA_BANNER } from "@/Redux/banner/action-types";
import { bannerReducer } from "@/Redux/banner/reducer";
import { getBannerWorker } from "@/Redux/banner/worker";
import { all, fork, takeEvery } from "redux-saga/effects";
export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export function* rootSaga() {
  try {
    yield all([fork(getBannerWorker)]);
  } catch (e) {}
}
