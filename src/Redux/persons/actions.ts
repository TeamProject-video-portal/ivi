import { IPerson } from "@/types/types";
import { PersonsActionTypes } from "./action-types";

export const getPersons = (persons: IPerson[]) => {
  return {
    type: PersonsActionTypes.SET_PERSONS,
    payload: persons,
  };
};

export const getPersonsError = (error: string) => {
  return {
    type: PersonsActionTypes.SET_PERSONS_ERROR,
    payload: error,
  };
};
