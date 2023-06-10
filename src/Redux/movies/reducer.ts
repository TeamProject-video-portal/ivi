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
  start: string;
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
  start: "",
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

export const moviesReducer = (state = initialState, action: AnyAction): IMoviesState => {
  switch (action.type) {
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

    case MOVIES_ACTIONS.GET_MOVIES_ERROR:
      return { ...state, error: action.payload };

    case MOVIES_ACTIONS.GET_MOVIES_START:
      return { ...state, start: "START" };

    case MOVIES_ACTIONS.EDIT_GENRE:
      let genresCopy = [...state.genresRu];
      let findGenre = genresCopy.find((item) => item.id === action.payload.id);
      if (findGenre) {
        genresCopy = genresCopy.map((item) =>
          item.id === action.payload.id ? (item.name = action.payload.genre) : item,
        );
        return { ...state, genresRu: genresCopy };
      } else {
        genresCopy = [...state.genresEn];
        findGenre = genresCopy.find((item) => item.id === action.payload.id);
        if (findGenre) {
          genresCopy = genresCopy.map((item) =>
            item.id === action.payload.id ? (item.name = action.payload.genre) : item,
          );
          return { ...state, genresEn: genresCopy };
        }
      }
      return state;

    // case HYDRATE:
    //   return {
    //     ...state,
    //     ...action.payload.movies,
    //   };
    default:
      return state;
  }
};
