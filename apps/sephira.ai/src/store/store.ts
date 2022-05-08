import { configureStore, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.counter,
    }),
  },
});

const reducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);

export const selectCounter = () => (state: AppState) =>
  state?.[counterSlice.name]?.value;
