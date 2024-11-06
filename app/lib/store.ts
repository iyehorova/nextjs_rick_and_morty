import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { charactersApiSlice } from './features/characters/charactersApi';
import filterSlice from './features/filterSlice';
import pagesSlice from './features/pagesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      pages: pagesSlice,
      filter: filterSlice,
      [charactersApiSlice.reducerPath]: charactersApiSlice.reducer,
    },
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(charactersApiSlice.middleware);
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
