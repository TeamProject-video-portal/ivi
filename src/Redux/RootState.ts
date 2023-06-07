import { BannerReducerT } from "./banner/reducer";
import { TopMovieReducerT } from "./topTenMovies/reducer";
import { IMoviesState } from "./movies/reducer";
import { IFilterState } from "./filter/reducer";
import { ISimpleMovie, MoviesForSlidersOnHomePageT } from "@/types/types";

export type RootState = {
  banner: BannerReducerT;
  topMovies: TopMovieReducerT;
  movie: ISimpleMovie;
  movies: IMoviesState;
  filters: IFilterState;
  homePage: MoviesForSlidersOnHomePageT;
};
