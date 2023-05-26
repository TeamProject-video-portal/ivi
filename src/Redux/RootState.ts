import { BannerType } from "@/types/types";
import { BannerReducerT } from "./banner/reducer";
import { IMoviesState } from "./movies/reducer";

export type RootState = {
  banner: BannerReducerT;
  movies: IMoviesState;
};
