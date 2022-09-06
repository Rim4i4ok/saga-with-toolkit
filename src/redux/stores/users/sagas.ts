import axios, { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";

import { getUsersApi } from "./actions";
import { actions } from "./reducer";
import { IUser, IResult } from "./types";

function* getUsersApiSaga() {
  try {
    const { data }: AxiosResponse<IResult> = yield axios.get(
      `https://randomuser.me/api/?results=10`
    );

    yield put(actions.setUsers(data.results));
  } catch (err) {
    console.error(err);
  }
}

function* usersSaga() {
  yield all([takeLatest(getUsersApi, getUsersApiSaga)]);
}

export default [usersSaga];
