import { createReducer } from 'utils/createReducer';
import { fetchTodoByIdDone, fetchTodoByIdInit } from "../../actions";
import { ITodo } from "interfaces";

const initialState = {
  title: '',
  description: ''
};

export default createReducer({
  [fetchTodoByIdInit().type]: (state: any) => initialState,
  [fetchTodoByIdDone().type]: (state: any, payload: ITodo) => ({
    ...state,
    ...payload
  }),
}, initialState);
