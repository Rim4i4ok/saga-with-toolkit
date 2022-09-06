import { combineReducers } from "@reduxjs/toolkit";

import { reducer as todoReducer } from "./todo/reducer";
import UsersReducer from "./users/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  users: UsersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
