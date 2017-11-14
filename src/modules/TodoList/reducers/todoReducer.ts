import { createReducer } from 'utils/createReducer';
import { fetchTodosDone, fetchTodosInit } from "../../actions";
import { ITodo } from "interfaces";

const initialState = {
  list: [],
  loading: false
};

export default createReducer({
  [fetchTodosInit().type]: (state: any, payload: ITodo[]) => initialState,
  [fetchTodosDone().type]: (state: any, payload: ITodo[]) => ({
    loading: false,
    list: payload
  }),
}, initialState);
