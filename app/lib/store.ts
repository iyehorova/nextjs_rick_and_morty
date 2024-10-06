import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import charactersFilterSlice from './features/characters/charactersFilterSlice';
import { charactersApiSlice } from './features/characters/charactersApi';

// const rootReducer = combineSlices(charactersFilterSlice, charactersApiSlice);
// export type RootState = ReturnType<typeof rootReducer>;
export const makeStore = () => {
  return configureStore({
    reducer: {
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
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
// export type AppStore = ReturnType<typeof makeStore>
// // export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']

// export const store = configureStore({
//   reducer: {
//     characters: charactersReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
