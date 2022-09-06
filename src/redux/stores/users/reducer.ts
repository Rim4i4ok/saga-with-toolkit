import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";

import { clearStore } from "./actions";
import { IUser } from "./types";

const slice = createSlice({
  name: "users",
  initialState: [] as Array<IUser>,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<Array<IUser>>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => [],
  },
});

export const { actions } = slice;

export default slice.reducer;
