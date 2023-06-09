import {
  CountriesType,
  GenresType,
  IMovie,
  ISimpleMovie,
  PersonForSearchType,
  PersonForSliderType,
} from "@/types/types";
import { AnyAction } from "@reduxjs/toolkit";
import { MOVIES_ACTIONS } from "./action-types";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export interface IMoviesState {
  movies: IMovie[];
  genres: string[];
  countries: string[];
  actors: PersonForSearchType[];
  directors: PersonForSearchType[];
  genresRu: GenresType[];
  genresEn: GenresType[];
  countriesRu: CountriesType[];
  countriesEn: CountriesType[];
  popularActors: PersonForSliderType[];
  bestFilmsSet: ISimpleMovie[];
  error: string;
}

const initialState: IMoviesState = {
  movies: [],
  genres: [],
  countries: [],
  actors: [],
  directors: [],
  genresRu: [],
  genresEn: [],
  countriesRu: [],
  countriesEn: [],
  popularActors: [],
  bestFilmsSet: [],
  error: "",
};

export const moviesReducer = (
  state = initialState,
  action: AnyAction
): IMoviesState => {
  switch (action.type) {
    case MOVIES_ACTIONS.GET_MOVIES:
      const actionPayload = action.payload as IMovie[];

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
        genres: Array.from(genresSet),
        countries: Array.from(countriesSet),
        error: "",
      };

    case MOVIES_ACTIONS.GET_MOVIES_ERROR:
      return { ...state, error: action.payload };

    case MOVIES_ACTIONS.GET_MOVIES_DATA:
      return {
        ...state,
        actors: action.payload.actors,
        directors: action.payload.directors,
        genresRu: action.payload.genresRu,
        genresEn: action.payload.genresEn,
        countriesRu: action.payload.countriesRu,
        countriesEn: action.payload.countriesEn,
        popularActors: action.payload.popularActors,
        bestFilmsSet: action.payload.bestFilmsSet,
        error: "",
      };

    case MOVIES_ACTIONS.EDIT_GENRES:
      return { ...state, genres: action.payload };

    // case HYDRATE:
    //   return {
    //     ...state,
    //     ...action.payload.movies,
    //   };
    case MOVIES_ACTIONS.GET_MOVIES_START:
      return action.type;
    case MOVIES_ACTIONS.GET_MOVIES_DATA_ALL:
      return action.type;
    default:
      return state;
  }
};
