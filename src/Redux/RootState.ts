import { BannerType } from "@/types/types";
import { BannerReducerT } from "./banner/reducer";

export type RootState = {
  banner: BannerReducerT;
};
