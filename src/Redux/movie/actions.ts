import { GET_DATA } from "./action-types";

export const GET_ACTOR = (value: any) => {
  return {
    type: GET_DATA.GET_ACTOR,
    payload: value,
  };
};
