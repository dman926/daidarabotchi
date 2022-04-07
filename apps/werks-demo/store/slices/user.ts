import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

export interface UserState {
  id?: string;
  username?: string;
};

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      state = {...state, ...action.payload};
    }
  }
});

export const { updateUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;