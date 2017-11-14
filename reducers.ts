import { combineReducers } from "redux";
import Todos from "modules/TodoList/reducers/todoReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  routing: routerReducer,
  Todos
});
