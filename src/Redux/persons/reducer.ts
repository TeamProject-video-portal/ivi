import { IPerson } from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { PersonsActionTypes } from "./action-types";

export interface IPersonsState {
  persons: IPerson[];
  error: string;
}

const initialState: IPersonsState = {
  persons: [],
  error: "",
};

export const personsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case PersonsActionTypes.SET_PERSONS:
      return {
        ...state,
        persons: action.payload,
        error: "",
      };

    case PersonsActionTypes.SET_PERSONS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
