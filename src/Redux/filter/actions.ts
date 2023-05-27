import { FilterRangeType } from "@/types/types";
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
