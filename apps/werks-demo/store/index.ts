import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import reducer from './reducers';

export const store = configureStore({
  reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
