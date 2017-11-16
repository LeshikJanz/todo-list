import { createReducer } from 'utils/createReducer';
import { changeListType, fetchTodosDone, fetchTodosInit, updateOrderAction, updateTodoDone } from "../../actions";
import { ITodo } from "interfaces";

const initialState = {
  list: [],
  type: 'active',
  loading: false
};

export default createReducer({
  [fetchTodosInit().type]: (state: any) => ({
    ...state,
    loading: true
  }),
  [fetchTodosDone().type]: (state: any, payload: ITodo[]) => ({
    ...state,
    loading: false,
    list: payload
  }),
  [changeListType().type]: (state: any, payload: string) => ({
    ...state,
    type: payload
  }),
  [updateTodoDone().type]: (state: any, payload: ITodo) => ({
    ...state,
    list: [
      ...state.list.filter(f => f.id !== payload.id),
      payload
    ]
  }),
  [updateOrderAction().type]: (state: any, payload: string[]) => ({
    ...state,
    list: payload.map((id, i) => {
      const elem = state.list.find(s => s.id === id);
      elem.order = i;
      return elem;
    })
  }),
}, initialState);
