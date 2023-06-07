import { IPerson, PersonForSliderType } from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { PERSONS_ACTIONS } from "./action-types";

export interface IPersonsState {
  actors: IPerson[];
  directors: IPerson[];
  popularActors: PersonForSliderType[];
  error: string;
}

const initialState: IPersonsState = {
  actors: [],
  directors: [],
  popularActors: [],
  error: "",
};

export const personsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case PERSONS_ACTIONS.GET_ACTORS:
      return {
        ...state,
        actors: action.payload,
        error: "",
      };

    case PERSONS_ACTIONS.GET_DIRECTORS:
      return {
        ...state,
        directors: action.payload,
        error: "",
      };

    case PERSONS_ACTIONS.GET_POPULAR_ACTORS:
      return {
        ...state,
        popularActors: action.payload,
        error: "",
      };

    case PERSONS_ACTIONS.GET_PERSONS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
