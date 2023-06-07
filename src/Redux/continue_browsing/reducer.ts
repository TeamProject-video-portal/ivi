import { BannerType, FilmLangType } from "@/types/types";
import { DATA_CONTINUE_BROWSING } from "./action-types";

export type BrowsingMovie = {
  id: number;
  poster: string;
  name: { ruName: string; enName: string };
  description: string;
};

const initialState: BrowsingMovie[] = [
  {
    id: 535341,
    poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
    name: {
      ruName: "фильм",
      enName: "film",
    },
    description: " lololo",
  },
];

export const continueBrowsingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_CONTINUE_BROWSING.GET_CONTINUE_BROWSING:
      console.log("payload", action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};
