'use client';
import { ResponseInfo } from '@/app/types/ResponseInfo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RefreshStatePayload = {
  info: ResponseInfo;
  itemsCount: number;
}

type InitialState = {
  pages: number | null;
  currentPage: number;
  count: number | null;
  itemsOnPage: number | null;
};

const initialState: InitialState = {
  pages: null,
  currentPage: 1,
  count: null,
  itemsOnPage: null,
};

const charactersPagesSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    refreshState: (state, { payload }: PayloadAction<RefreshStatePayload>) => { 
      const { info, itemsCount } = payload;
      const { count, pages, next, prev } = info;
      state.pages = pages;
      state.count = count;
      state.currentPage = next ? getPageFromUrl(next) - 1 :
        prev ? getPageFromUrl(prev) + 1 : 1;
      state.itemsOnPage = itemsCount;
    },
    refreshItemsOnPage: (state, { payload }: PayloadAction<number|null>) => {
      state.itemsOnPage = payload;
     },
     goNextPage: state => {
      state.currentPage++;
    },
    goPreviousPage: state => {
      state.currentPage--;
    },
    goToPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
  },
});
export const { refreshState, goNextPage, goPreviousPage, goToPage, refreshItemsOnPage } =
  charactersPagesSlice.actions;
export default charactersPagesSlice.reducer;

function getPageFromUrl(url: string): number {
  return Number(url.split('page=')[1]);
}