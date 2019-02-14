import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk"
import todo from "./reducers/todo/todo";
import todoFilter from "./reducers/todo/todoFilter";
import counter from "./reducers/couter/index";

const store = createStore(
  combineReducers({
    todo,
    todoFilter,
    counter
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

// export default todoApp;

export default store
