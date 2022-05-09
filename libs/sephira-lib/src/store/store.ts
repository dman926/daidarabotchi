import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices';

export const createStore = (production?: boolean) =>
  configureStore({
    reducer,
    devTools: !production,
  });

type Store = ReturnType<typeof createStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
