import { IMovie } from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { MoviesActionTypes } from "./action-types";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export interface IMoviesState {
  movies: IMovie[];
  years: number[];
  genres: string[];
  countries: string[];
  error: string;
}

const initialState: IMoviesState = {
  movies: [],
  years: [],
  genres: [],
  countries: [],
  error: "",
};

export const moviesReducer = (state = initialState, action: AnyAction): IMoviesState => {
  switch (action.type) {
    case MoviesActionTypes.SET_MOVIES:
      const actionPayload = action.payload as IMovie[];
      const years = Array.from(new Set(actionPayload.map((item) => item.filmYear)));
      const genresSet = new Set<string>();
      actionPayload.map((item) => {
        item.genres.map((elem) => genresSet.add(elem.name));
      });
      const countriesSet = new Set<string>();
      actionPayload.map((item) => {
        item.countries.map((elem) => countriesSet.add(elem.name));
      });
      return {
        ...state,
        movies: actionPayload,
        years,
        genres: Array.from(genresSet),
        countries: Array.from(countriesSet),
        error: "",
      };

    case MoviesActionTypes.SET_MOVIES_ERROR:
      return { ...state, error: action.payload };

    // case HYDRATE:
    //   return {
    //     ...state,
    //     ...action.payload.movies,
    //   };

    default:
      return state;
  }
};
