import { AnyAction } from "@reduxjs/toolkit";
import { FilterActionTypes } from "./action-types";
import { IMovie, SortType } from "@/types/types";
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
  actors: string[];
  directors: string[];
  results: IMovie[];
  sort: SortType;
  error: string;
}

const initialState: IFilterState = {
  isFilter: false,
  genres: [],
  countries: [],
  yearsMin: 1940,
  yearsMax: 2023,
  ratingMin: 4.0,
  ratingMax: 10.0,
  scoreMin: 10000,
  scoreMax: 200000,
  actors: [],
  directors: [],
  results: [],
  sort: "RATING",
  error: "",
};

export const filterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FilterActionTypes.RESET_FILTERS:
      return {
        ...state,
        ...initialState,
        results: action.payload,
      };

    case FilterActionTypes.SET_GENRES:
      let genresCopy = [...state.genres];
      if (genresCopy.includes(action.payload)) {
        genresCopy = genresCopy.filter((item) => item !== action.payload);
      } else {
        genresCopy.push(action.payload);
      }
      return { ...state, genres: genresCopy, isFilter: true };

    case FilterActionTypes.SET_COUNTRIES:
      let countriesCopy = [...state.countries];
      if (countriesCopy.includes(action.payload)) {
        countriesCopy = countriesCopy.filter((item) => item !== action.payload);
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

    case FilterActionTypes.SET_ACTORS:
      let actorsCopy = [...state.actors];
      if (!actorsCopy.includes(action.payload)) {
        actorsCopy.push(action.payload);
      }
      return { ...state, actors: actorsCopy, isFilter: true };

    case FilterActionTypes.SET_DIRECTORS:
      let directorsCopy = [...state.directors];
      if (!directorsCopy.includes(action.payload)) {
        directorsCopy.push(action.payload);
      }
      return { ...state, directors: directorsCopy, isFilter: true };

    case FilterActionTypes.SET_SORT:
      return { ...state, sort: action.payload };

    case FilterActionTypes.SET_FILTERS_RESULTS:
      return { ...state, results: action.payload, error: "" };

    case FilterActionTypes.GET_FILTERS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
