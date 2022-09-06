import { all, fork } from "redux-saga/effects";

import todoSaga from "./todo/sagas";
import usersSaga from "./users/sagas";

const sagas = [...todoSaga, ...usersSaga];

export default function* root() {
  yield all(sagas.map((saga) => saga()));
}
