import todoReducers from "./toDoReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers
});

export default rootReducer;
