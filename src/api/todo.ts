import { request } from "./base";
import { ITodo } from "interfaces";

export const fetchTodos = (todo: ITodo) =>
  request
    .get('todos', {})
    .then((todos: ITodo[]) => <ITodo[]> todos);

export const fetchTodoById = (id: string) =>
  request
    .get(`todos/${id}`, {})
    .then((todo: ITodo) => <ITodo> todo);

export const updateTodo = (todo: ITodo) =>
  request
    .put('todos', todo)
    .then((res: ITodo) => <ITodo> res);