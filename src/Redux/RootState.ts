import { BannerReducerT } from "./banner/reducer";
import { TopMovieReducerT } from "./topTenMovies/reducer";
import { IMoviesState } from "./movies/reducer";
import { IPersonsState } from "./persons/reducer";

export type RootState = {
  banner: BannerReducerT;
  topMovies: TopMovieReducerT;
  movies: IMoviesState;
  persons: IPersonsState;
};
