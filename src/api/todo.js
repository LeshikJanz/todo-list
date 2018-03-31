import { request } from "./base"

export const fetchTodos = (todo: ITodo) =>
  request
    .get('todos', {})
    .then((todos: ITodo[]) => todos)

export const fetchTodoById = (id: string) =>
  request
    .get(`todos/${id}`, {})
    .then((todo: ITodo) => todo)

export const updateTodo = (todo: ITodo) =>
  request
    .put('todos', todo)
    .then((res: ITodo) => res)

export const deleteTodo = (id: string) =>
  request
    .delete(`todos/${id}`, {})
    .then((res: number) => res)

export const updateOrder = (ids: string[]) =>
  request
    .post(`todos/updateOrder`, { ids })
    .then((res: boolean) => res)
