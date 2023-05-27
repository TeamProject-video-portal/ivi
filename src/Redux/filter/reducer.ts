import { AnyAction } from "@reduxjs/toolkit";
import { FilterActionTypes } from "./action-types";
export interface IFilterState {
  isFilter: boolean;
  genres: string[];
  countries: string[];
  yearsMin: number;
  yearsMax: number;
  ratingMin: number;
  ratingMax: number;
  scoreMin: number;
  scoreMax: number;
}

const initialState: IFilterState = {
  isFilter: false,
  genres: [""],
  countries: [""],
  yearsMin: 1940,
  yearsMax: 2023,
  ratingMin: 4.0,
  ratingMax: 10.0,
  scoreMin: 10000,
  scoreMax: 200000,
};

export const filterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FilterActionTypes.RESET_FILTERS:
      return { ...state, initialState };

    case FilterActionTypes.SET_GENRES:
      let genresCopy = [...state.genres];
      if (genresCopy.includes(action.payload)) {
        genresCopy.filter((item) => item !== action.payload);
      } else {
        genresCopy.push(action.payload);
      }
      return { ...state, genres: genresCopy, isFilter: true };

    case FilterActionTypes.SET_COUNTRIES:
      let countriesCopy = [...state.countries];
      if (countriesCopy.includes(action.payload)) {
        countriesCopy.filter((item) => item !== action.payload);
      } else {
        countriesCopy.push(action.payload);
      }
      return { ...state, countries: countriesCopy, isFilter: true };

    case FilterActionTypes.SET_YEARS:
      return { ...state, yearsMin: action.payload[0], yearsMax: action.payload[1], isFilter: true };

    case FilterActionTypes.SET_RATING:
      return {
        ...state,
        ratingMin: action.payload[0],
        ratingMax: action.payload[1],
        isFilter: true,
      };

    case FilterActionTypes.SET_SCORE:
      return { ...state, scoreMin: action.payload[0], scoreMax: action.payload[1], isFilter: true };

    default:
      return state;
  }
};
