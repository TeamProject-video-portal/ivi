import { IPerson } from "@/types/types";
import { PersonsActionTypes } from "./action-types";

export const getActors = (actors: IPerson[]) => {
  return {
    type: PersonsActionTypes.SET_ACTORS,
    payload: actors,
  };
};

export const getDirectors = (directors: IPerson[]) => {
  return {
    type: PersonsActionTypes.SET_DIRECTORS,
    payload: directors,
  };
};

export const getPersonsError = (error: string) => {
  return {
    type: PersonsActionTypes.SET_PERSONS_ERROR,
    payload: error,
  };
};
