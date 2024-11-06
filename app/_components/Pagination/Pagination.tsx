'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { refreshState, selectPageInfo } from '@/app/lib/features/pagesSlice';
import { ResponseInfo } from '@/app/types/ResponseInfo';
import { FIRST_PAGE } from '@/app/constant';

import { PaginationNumbers } from './PaginationNumbers';
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
    <div className="footer-background absolute left-0 -mt-10 flex w-full items-center justify-between px-4 pb-5 pt-16 sm:px-6">
      <div className="flex flex-1 items-center justify-end sm:justify-between">
        <PaginationInfo
          currentPage={currentPage}
          allItems={allItems}
          pages={pages}
        />

        <PaginationNavigate currentPage={currentPage} pages={pages}>
          <PaginationNumbers pages={pages} currentPage={currentPage} />
        </PaginationNavigate>
      </div>
    </div>
  );
}
