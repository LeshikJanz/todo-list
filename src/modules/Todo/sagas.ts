import { put, select, takeEvery } from 'redux-saga/effects'
import { Task } from "redux-saga";
import { createTodoDone, createTodoError, createTodoInit } from "../actions";
import { updateTodo } from "api/todo";
import { urls } from "../../urls";
import { push } from "react-router-redux";
import { NotificationManager } from 'react-notifications';

export function* createTodoInitSaga({ payload }): Iterator<Object | Task> {
  try {
    const Todo = yield updateTodo(payload);
    yield put(createTodoDone(Todo));

    yield put(push(urls.index));
    NotificationManager.success('Todo has been created!', 'Success!');
  } catch (error) {
    yield put(createTodoError(error));
    NotificationManager.error(error && error.error.message, 'Error!');
  }
}

export function* todoSaga() {
  yield [
    takeEvery(createTodoInit().type, createTodoInitSaga)
  ]
}

