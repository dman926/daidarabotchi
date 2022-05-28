import { configureStore } from '@reduxjs/toolkit';
import reducer, { UserState } from './slices';

export const createStore = (
  production?: boolean,
  preloadedState?: { user?: UserState }
) =>
  configureStore({
    reducer,
    preloadedState,
    devTools: !production,
  });

type Store = ReturnType<typeof createStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
