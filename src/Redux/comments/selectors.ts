import { RootState } from "../RootState";

export const selectComment = (state: RootState) => {
  return state.comment;
};
