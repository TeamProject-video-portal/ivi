import { IPerson } from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { PersonsActionTypes } from "./action-types";

export interface IPersonsState {
  actors: IPerson[];
  directors: IPerson[];
  error: string;
}

const initialState: IPersonsState = {
  actors: [],
  directors: [],
  error: "",
};

export const personsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case PersonsActionTypes.SET_ACTORS:
      return {
        ...state,
        actors: action.payload,
        error: "",
      };

    case PersonsActionTypes.SET_DIRECTORS:
      return {
        ...state,
        directors: action.payload,
        error: "",
      };

    case PersonsActionTypes.SET_PERSONS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
