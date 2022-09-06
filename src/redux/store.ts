import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./stores/rootReducer";
import { rootSaga } from "./stores/rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
