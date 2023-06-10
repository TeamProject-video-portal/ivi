// import {
//   getMovieDataFail,
//   getMovieDataStart,
//   getMovieDataSuccess,
// } from "@/Redux/movie/actions";
// // import { getDatMovieWorker } from "@/Redux/movie/workers";
// import { IMovieRes } from "@/types/types";
// import { call, put } from "redux-saga/effects";

// export async function* getMovieDataSaga() {
//   console.log("movie saga");
//   yield put(getMovieDataStart());
//   try {
//     const response: IMovieRes = yield call(
//       // await getDatMovieWorker()
//     );
//     yield put(getMovieDataSuccess(response));
//     return response;
//   } catch (error: any) {
//     yield put(getMovieDataFail());
//   }
// }
