import { createAction } from "../utils/createAction";

export const fetchTodosInit = createAction('FETCH_TODOS_INIT');
export const fetchTodosDone = createAction('FETCH_TODOS_DONE');
export const fetchTodosError = createAction('FETCH_TODOS_ERROR');

export const updateTodosInit = createAction('UPDATE_TODOS_INIT');
export const updateTodosDone = createAction('UPDATE_TODOS_DONE');
export const updateTodosError = createAction('UPDATE_TODOS_ERROR');

export const createTodoInit = createAction('CREATE_TODO_INIT');
export const createTodoDone = createAction('CREATE_TODO_DONE');
export const createTodoError = createAction('CREATE_TODO_ERROR');

export const deleteTodoInit = createAction('DELETE_TODO_INIT');
export const deleteTodoDone = createAction('DELETE_TODO_DONE');
export const deleteTodoError = createAction('DELETE_TODO_ERROR');


