import { FilterRangeType, IMovie } from "@/types/types";
import { FilterActionTypes } from "./action-types";

export const resetFilters = () => {
  return {
    type: FilterActionTypes.RESET_FILTERS,
  };
};

export const setGenres = (genres: string) => {
  return {
    type: FilterActionTypes.SET_GENRES,
    payload: genres,
  };
};

export const setCountries = (countries: string) => {
  return {
    type: FilterActionTypes.SET_COUNTRIES,
    payload: countries,
  };
};

export const setYears = (years: FilterRangeType) => {
  return {
    type: FilterActionTypes.SET_YEARS,
    payload: years,
  };
};

export const setRating = (rating: FilterRangeType) => {
  return {
    type: FilterActionTypes.SET_RATING,
    payload: rating,
  };
};

export const setScore = (score: FilterRangeType) => {
  return {
    type: FilterActionTypes.SET_SCORE,
    payload: score,
  };
};

export const setActorsFilter = (actor: string) => {
  return {
    type: FilterActionTypes.SET_ACTORS,
    payload: actor,
  };
};

export const setDirectorsFilter = (director: string) => {
  return {
    type: FilterActionTypes.SET_DIRECTORS,
    payload: director,
  };
};

export const setResultsFilter = (results: IMovie[]) => {
  return {
    type: FilterActionTypes.SET_FILTERS_RESULTS,
    payload: results,
  };
};

export const getErrorFilter = (error: string) => {
  return {
    type: FilterActionTypes.GET_FILTERS_ERROR,
    payload: error,
  };
};
