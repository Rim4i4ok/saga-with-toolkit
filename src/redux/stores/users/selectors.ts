import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getUsers = (state: AppState) => state.users;

export const getUsersSelector = createSelector(getUsers, (users) => users);
