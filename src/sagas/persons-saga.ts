import { call, put } from "redux-saga/effects";
import { getPersons, getPersonsError } from "@/Redux/persons/actions";
import { IPerson } from "@/types/types";
import { personsApi } from "@/Redux/persons/worker";

export function* getPersonsSaga() {
  try {
    const response: IPerson[] = yield call(personsApi);
    yield put(getPersons(response));
  } catch (error) {
    console.log("error in personsSaga", error);
    yield put(getPersonsError(String(error)));
  }
}
