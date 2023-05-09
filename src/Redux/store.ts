import { createStore } from "redux";
import combineReducer from "./reducers";

export const store = createStore(
  combineReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
