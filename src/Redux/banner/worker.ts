import { BannerType } from "@/types/types";
import { call, put } from "redux-saga/effects";
import main_banner from "@/data/Main_banner.json";
import {
  getDataBannerFail,
  getDataBannerStart,
  getDataBannerSuccess,
} from "./actions";

const getStringAsync = () => {
  return new Promise<BannerType[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(main_banner);
    }, 1000);
  });
};

export function* getBannerWorker() {
  yield put(getDataBannerStart());
  try {
    const response: BannerType = yield call(getStringAsync);
    yield put(getDataBannerSuccess(response));
    return response;
  } catch (error: any) {
    yield put(getDataBannerFail());
  }
}
