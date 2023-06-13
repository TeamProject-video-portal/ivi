import {
  sendComment,
  sendCommentFail,
  sendCommentStart,
  sendCommentSuccess,
} from "@/Redux/comments/actions";
import { SendCommentWorker } from "@/Redux/comments/worker";
import { IMovieRes } from "@/types/types";
import { call, put } from "redux-saga/effects";

export function* sendCommentSaga({
  idFilm,
  idComment,
  comment,
}: ReturnType<typeof sendComment>) {
  yield put(sendCommentStart());
  try {
    const res: IMovieRes = yield call(
      SendCommentWorker,
      idFilm,
      idComment,
      comment
    );
    yield put(sendCommentSuccess(res));
  } catch (e) {
    yield put(sendCommentFail());
  }
}
