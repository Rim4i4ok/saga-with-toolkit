import { combineReducers } from "redux";

import { reducer as todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
