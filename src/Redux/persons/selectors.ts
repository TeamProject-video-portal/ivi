import { RootState } from "../RootState";

export const selectPersons = (state: RootState) => {
  return state.persons;
};
