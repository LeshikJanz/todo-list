import { put, select, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga";
import { fetchTodosDone, fetchTodosInit, fetchTodosError } from "../actions";
import { fetchTodos } from "api/todo";
import { push } from "react-router-redux";
import { NotificationManager } from 'react-notifications';

export function* fetchTodosInitSaga({ payload }): Iterator<Object | Task> {
  try {
    const Todos = yield fetchTodos(payload);
    yield put(fetchTodosDone(Todos));
  } catch (error) {
    yield put(fetchTodosError(error));
    NotificationManager.error(error && error.error.message, 'Error!');
  }
}

export function* todoListSaga() {
  yield [
    takeEvery(fetchTodosInit().type, fetchTodosInitSaga)
  ]
}

