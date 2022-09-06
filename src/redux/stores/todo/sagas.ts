import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./actionTypes";
import { ITodo } from "./types";

const getTodos = () =>
  axios
    .get<ITodo[]>("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.data;
    });

function* fetchTodoSaga() {
  try {
    const response: ITodo[] = yield call(getTodos);
    yield put(
      fetchTodoSuccess({
        todos: response,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(fetchTodoFailure({ error: "We have a problem" }));
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default [todoSaga];
