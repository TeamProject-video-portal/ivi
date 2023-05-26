import { call, put } from "redux-saga/effects";
import { getMovies, getMoviesError } from "./actions";
import { IMovie } from "@/types/types";

export const movieApi = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/movies`);
  const dataMovies = (await response.json()) as IMovie[];
  return dataMovies;
};

export function* getMoviesWorker() {
  try {
    const response: IMovie[] = yield call(movieApi);
    yield put(getMovies(response));
  } catch (error) {
    console.log("error in getMoviesWorker", error);
    // yield put(getMoviesError(String(error)));
  }
}
