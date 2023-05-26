import { BannerReducerT } from "./banner/reducer";
import { TopMovieReducerT } from "./topTenMovies/reducer";
import { IMoviesState } from "./movies/reducer";

export type RootState = {
  banner: BannerReducerT;
  topMovies: TopMovieReducerT;
  movies: IMoviesState;
};
