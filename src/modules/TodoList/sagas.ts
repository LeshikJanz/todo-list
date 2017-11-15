import { put, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga";
import {
  fetchTodosDone, fetchTodosInit, fetchTodosError, updateTodoInit, updateTodoDone,
  updateTodoError, deleteTodoInit, deleteTodoDone, deleteTodoError
} from "../actions";
import { deleteTodo, fetchTodos, updateTodo } from "api/todo";
import { push } from "react-router-redux";

export function* fetchTodosSaga({ payload }): Iterator<Object | Task> {
  try {
    const Todos = yield fetchTodos(payload);
    yield put(fetchTodosDone(Todos));
  } catch (error) {
    yield put(fetchTodosError(error));
  }
}

export function* updateTodoSaga({ payload }): Iterator<Object | Task> {
  try {
    const Todo = yield updateTodo(payload);
    yield put(updateTodoDone(Todo));
  } catch (error) {
    yield put(updateTodoError(error));
  }
}

export function* deleteTodoSaga({ payload }): Iterator<Object | Task> {
  try {
    yield deleteTodo(payload);
    yield put(deleteTodoDone());
    yield put(fetchTodosInit());
  } catch (error) {
    yield put(deleteTodoError(error));
  }
}

export function* todoListSaga() {
  yield [
    takeEvery(fetchTodosInit().type, fetchTodosSaga),
    takeEvery(updateTodoInit().type, updateTodoSaga),
    takeEvery(deleteTodoInit().type, deleteTodoSaga)
  ]
}

