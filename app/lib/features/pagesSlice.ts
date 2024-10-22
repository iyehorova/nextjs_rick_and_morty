'use client';
import { ResponseInfo } from '@/app/types/ResponseInfo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type RefreshStatePayload = {
  info: ResponseInfo;
  itemsCount: number;
};

type InitialState = {
  pages: number | null;
  currentPage: number;
  allItems: number | null;
  itemsOnPage: number | null;
};

const initialState: InitialState = {
  pages: null,
  currentPage: 1,
  allItems: null,
  itemsOnPage: null,
};

const pagesSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    refreshState: (state, { payload }: PayloadAction<RefreshStatePayload>) => {
      const { info, itemsCount } = payload;
      const { count, pages, next, prev } = info;
      state.pages = pages;
      state.allItems = count;
      state.currentPage = next
        ? getPageFromUrl(next) - 1
        : prev
          ? getPageFromUrl(prev) + 1
          : 1;
      state.itemsOnPage = itemsCount;
    },
    refreshItemsOnPage: (state, { payload }: PayloadAction<number | null>) => {
      state.itemsOnPage = payload;
    },
    goToPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
  },
});

export const { refreshState, goToPage, refreshItemsOnPage } =
  pagesSlice.actions;

export default pagesSlice.reducer;

function getPageFromUrl(url: string): number {
  return Number(url.split('page=')[1]);
}

export const selectPageInfo = (state: RootState) => state.pages;
