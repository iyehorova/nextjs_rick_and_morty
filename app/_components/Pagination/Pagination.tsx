'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import {
  refreshState,
  selectPageInfo,
} from '../../lib/features/characters/charactersPagesSlice';
import { ResponseInfo } from '../../types/ResponseInfo';
import { PaginationNumbers } from './PaginationNumbers';

import { FIRST_PAGE } from '../../constant';
import { PaginationNavigate } from './PaginationNavigate';
import { PaginationInfo } from './PaginationInfo';

type Props = {
  currentPage: number;
  info: ResponseInfo;
  itemsCount: number;
};

export function Pagination({ currentPage, info, itemsCount }: Props) {
  const dispatch = useAppDispatch();
  const { pages, allItems } = useAppSelector(selectPageInfo);

  useEffect(() => {
    dispatch(refreshState({ info, itemsCount }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info, itemsCount]);

  const isPaginationVisible = allItems && pages && pages > FIRST_PAGE;

  if (!isPaginationVisible) return null;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <PaginationInfo currentPage={currentPage} allItems={allItems} pages={ pages} />
        <PaginationNavigate currentPage={currentPage} pages={pages}>
          <PaginationNumbers pages={pages} currentPage={currentPage} />
        </PaginationNavigate>
      </div>
    </div>
  );
}
