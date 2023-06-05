import { BannerType } from "@/types/types";
import { DATA_HOME_PAGE } from "./action-types";

export type HomePageReducerType = {
  data: any;
};

const initialState: HomePageReducerType = {
  data: [],
};

export const homePageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_HOME_PAGE.GET_DATA_HOME_PAGE_START:
      return action.type;

    case DATA_HOME_PAGE.GET_DATA_HOME_PAGE:
      return { data: action.payload };

    case DATA_HOME_PAGE.GET_DATA_HOME_PAGE_FAIL:
      return action.type;

    case DATA_HOME_PAGE.GET_DATA_HOME_PAGE_SUCCESS:
      return { data: action.payload };

    default:
      return state;
  }
};
