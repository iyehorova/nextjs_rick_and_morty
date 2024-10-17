'use client';
import { dataCharactersSlice } from '@/app/types/Characters';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type Filters = { [key: string]: string };
type InitialState = {
  filters: Filters;
  query: string;
};

const initialState: InitialState = {
  filters: {},
  query: '',
};

const charactersFilterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    toggleFilter: (state, { payload }: PayloadAction<dataCharactersSlice>) => {
      const { filterName, filterOption } = payload;
      if (
        !state.filters[filterName] ||
        state.filters[filterName] !== filterOption
      ) {
        state.filters[filterName] = filterOption;
      } else {
        delete state.filters[filterName];
      }
    },
    deleteFilter: (state, { payload }: PayloadAction<string>) => {
      delete state.filters[payload];
    },
    initializeFilters: (state, { payload }: PayloadAction<Filters>) => {
      state.filters = { ...payload };
    }
  },
});
export const { toggleFilter, deleteFilter, initializeFilters } = charactersFilterSlice.actions;
export default charactersFilterSlice.reducer;

export const selectFilters = (state: RootState) => state.charactersFilter.filters;
