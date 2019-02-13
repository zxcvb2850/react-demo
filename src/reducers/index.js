import {combineReducers} from "redux";
import todo from "./todo";
import todoFilter from "./todoFilter";
import {counter} from "./addReducers";

const todoApp = combineReducers({
  todo,
  todoFilter,
  counter
})

export default todoApp;
