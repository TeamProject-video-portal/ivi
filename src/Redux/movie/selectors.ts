import { RootState } from "../RootState";

export const selectMovie = (state: RootState) => {
  return state.movie;
};
