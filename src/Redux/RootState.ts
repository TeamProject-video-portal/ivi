import { BannerReducerT } from "./banner/reducer";
import { TopMovieReducerT } from "./topTenMovies/reducer";
import { IMoviesState } from "./movies/reducer";
import { IPersonsState } from "./persons/reducer";
import { IFilterState } from "./filter/reducer";
import { MoviesForSlidersOnHomePageT } from "@/types/types";

export type RootState = {
  banner: BannerReducerT;
  topMovies: TopMovieReducerT;
  movies: IMoviesState;
  persons: IPersonsState;
  filters: IFilterState;
  homePage: MoviesForSlidersOnHomePageT;
};
