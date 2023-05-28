import { call, put } from "redux-saga/effects";
import { getActors, getDirectors, getPersonsError } from "@/Redux/persons/actions";
import { IPerson } from "@/types/types";
import { actorsApi, directorsApi } from "@/Redux/persons/worker";

export function* getPersonsSaga() {
  try {
    const resActors: IPerson[] = yield call(actorsApi);
    yield put(getActors(resActors));
    const resDirectors: IPerson[] = yield call(directorsApi);
    yield put(getDirectors(resDirectors));
  } catch (error) {
    console.log("error in personsSaga", error);
    yield put(getPersonsError(String(error)));
  }
}
