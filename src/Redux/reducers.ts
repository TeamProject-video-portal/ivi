import { combineReducers } from "redux";
import { actorReducer } from "./movie/reducer";

export default combineReducers({
  actor: actorReducer,
  
});
