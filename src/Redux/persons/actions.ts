import { IPerson, PersonForSliderType } from "@/types/types";
import { PERSONS_ACTIONS } from "./action-types";

export const getActors = (actors: IPerson[]) => {
  return {
    type: PERSONS_ACTIONS.GET_ACTORS,
    payload: actors,
  };
};

export const getDirectors = (directors: IPerson[]) => {
  return {
    type: PERSONS_ACTIONS.GET_DIRECTORS,
    payload: directors,
  };
};

export const getPopularActors = (actors: PersonForSliderType[]) => {
  return {
    type: PERSONS_ACTIONS.GET_POPULAR_ACTORS,
    payload: actors,
  };
};

export const getPersonsError = (error: string) => {
  return {
    type: PERSONS_ACTIONS.GET_PERSONS_ERROR,
    payload: error,
  };
};
