import { DATA_HOME_PAGE } from "./action-types";

export const getDataBanner = () => {
  return {
    type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE,
  };
};

export const getDataBannerStart = () => {
  return {
    type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE_START,
  };
};

export const getDataBannerSuccess = (value: any) => {
  return {
    type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE_SUCCESS,
    payload: value,
  };
};

export const getDataBannerFail = () => {
  return {
    type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE_FAIL,
  };
};
