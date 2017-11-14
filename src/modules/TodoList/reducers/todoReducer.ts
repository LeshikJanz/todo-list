import { createReducer } from 'utils/createReducer';
import { fetchTodosDone } from "../../actions";
import { ITodo } from "interfaces";

const initialState = [];

export default createReducer({
  [fetchTodosDone().type]: (state: any, payload: ITodo[]) => ([
    ...payload
  ]),
}, initialState);
