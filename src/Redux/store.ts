import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { bannerReducer } from "./banner/reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "@/sagas/RootSaga";
import { topMovieReducer } from "./topTenMovies/reducer";
import { moviesReducer } from "./movies/reducer";
import { personsReducer } from "./persons/reducer";
import { filterReducer } from "./filter/reducer";
import { homePageReducer } from "./homePage/reducer";
import { movieReducer } from "./movie/reducer";

const sagaMiddleware = createSagaMiddleware();
const makeStore = () => {
  const Store = configureStore({
    reducer: {
      banner: bannerReducer,
      topMovies: topMovieReducer,
      movies: moviesReducer,
      persons: personsReducer,
      filters: filterReducer,
      homePage: homePageReducer,
      movie: movieReducer,
    },
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);

  return Store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = RootStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const store = makeStore();
export const wrapper = createWrapper<RootStore>(makeStore);
