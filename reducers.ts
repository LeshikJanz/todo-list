import { combineReducers } from "redux";
import Todo from "modules/Todo/reducers/todoReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  routing: routerReducer,
  Todo
});
