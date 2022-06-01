/* eslint-disable no-param-reassign */

import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';
import { User } from '../../interfaces/user';
import type { RootState } from '../store';

export interface UserState {
  status: 'signed-in' | 'signed-out' | 'loading';
  userData?: User;
  logInError?: SerializedError;
}

const initialState: UserState = {
  status: 'signed-out',
};

export const fetchUser = createAsyncThunk(
  'user/fetch',
  // eslint-disable-next-line
  async (_: undefined, thunkAPI) => {
    // return thunkAPI.rejectWithValue('err');
    return {
      firstName: 'Bob',
      lastName: 'Jones',
      nickName: 'Void',
      profileImg: 'imgurl',
      accessToken: '',
      refreshToken: '',
    };
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
        // Just in case
        state.userData = undefined;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'signed-in';
        state.userData = action.payload;
        // @TODO: replace this with a cookie service
        localStorage.setItem('access-token', action.payload.accessToken);
        localStorage.setItem('refresh-token', action.payload.refreshToken);
        // Just in case
        state.logInError = undefined;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'signed-out';
        state.logInError = action.error;
        // Just in case
        state.userData = undefined;
      });
  },
});

export const selectUser = (state: RootState) => {
  const { userData, ...rest } = state.user;
  let out: {
    status: 'signed-in' | 'signed-out' | 'loading';
    logInError?: SerializedError;
  } & Partial<User> = { ...rest };
  if (userData) {
    // flatten userData
    out = { ...rest, ...userData };
  }
  return out;
};

export default userSlice.reducer;
