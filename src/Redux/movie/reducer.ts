import { GET_DATA } from "./action-types";

export type ProductsReducer = {};

const initialState: ProductsReducer = {};

export const actorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA.GET_ACTOR:
      return action.payload;
    default:
      return state;
  }
};
