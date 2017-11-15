import { createReducer } from 'utils/createReducer';
import { changeListType, fetchTodosDone, fetchTodosInit } from "../../actions";
import { ITodo } from "interfaces";

const initialState = {
  list: [],
  type: 'active',
  loading: false
};

export default createReducer({
  [fetchTodosDone().type]: (state: any, payload: ITodo[]) => ({
    ...state,
    loading: false,
    list: payload
  }),
  [changeListType().type]: (state: any, payload: string) => ({
    ...state,
    type: payload
  })
}, initialState);
