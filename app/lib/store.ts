import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import charactersFilterSlice from './features/characters/charactersFilterSlice';
import { charactersApiSlice } from './features/characters/charactersApi';
import charactersPagesSlice from './features/characters/charactersPagesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      charactersPages: charactersPagesSlice,
      charactersFilter: charactersFilterSlice,
      [charactersApiSlice.reducerPath]: charactersApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(charactersApiSlice.middleware);
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
