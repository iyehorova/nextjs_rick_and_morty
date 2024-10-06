'use client'
import { dataCharactersSlice } from '@/app/types/Characters';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type InitialState = {
  filters: {
    [key: string]: string;
  };
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
      console.log('filterName', filterName);
      console.log('filterOption', filterOption);
      if (!state.filters[filterName] || state.filters[filterName] !== filterOption) {
        state.filters[filterName] = filterOption;
      } else { 
        delete state.filters[filterName];
      }
    }
  },
});
export const { toggleFilter } = charactersFilterSlice.actions;
export default charactersFilterSlice.reducer;
