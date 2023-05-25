import { BannerReducerT } from "./banner/reducer";
import { TopMovieReducerT } from "./topTenMovies/reducer";

export type RootState = {
  banner: BannerReducerT;
  topMovies: TopMovieReducerT;
};
