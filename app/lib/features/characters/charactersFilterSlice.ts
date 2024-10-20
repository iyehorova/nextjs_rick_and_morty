'use client';
import { dataCharactersSlice } from '@/app/types/Characters';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CommonParams } from '@/app/types/Params';

type Filters = { [key: string]: string };
type InitialState = {
  filters: Filters;
};

const initialState: InitialState = {
  filters: {},
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
    },
    changeQuery: (state, { payload }: PayloadAction<string>) => { 
      if (payload) {
        state.filters[CommonParams.query] = payload;
      } else { 
        delete state.filters[CommonParams.query];
      }
    },
    clearAll: () => initialState,    
  },
});
export const { toggleFilter, deleteFilter, initializeFilters, changeQuery, clearAll } = charactersFilterSlice.actions;
export default charactersFilterSlice.reducer;

export const selectFilters = (state: RootState) => state.charactersFilter.filters;
