'use client';
import clsx from 'clsx';
import { MAX_PAGINATION_ITEMS } from '@/app/constant';
import { goToPage } from '@/app/lib/features/pagesSlice';
import { useAppDispatch } from '@/app/lib/hooks';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { CommonParams } from '@/app/types/Params';

type Props = {
  pages: number;
  currentPage: number;
};

export function PaginationNumbers({ pages, currentPage }: Props) {
  const dispatch = useAppDispatch();
  const updateParams = useSetSearchParams();

  function handlePageClick(pageNumber: number) {
    dispatch(goToPage(pageNumber));
    updateParams(CommonParams.page, `${pageNumber}`);
  }

  let pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  if (pages > MAX_PAGINATION_ITEMS) {
    const halfOfMax = Math.floor(MAX_PAGINATION_ITEMS / 2);
    const startNumber = currentPage > halfOfMax ? currentPage - halfOfMax : 1;
    const endNumber =
      pages - currentPage > halfOfMax ? currentPage + halfOfMax : pages;
    pageNumbers = pageNumbers.slice(startNumber - 1, endNumber);
  }

  return (
    <>
      {pageNumbers.map(pageNumber => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          aria-current="page"
          className={clsx(
            `relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
            {
              'bg-accent text-background focus-visible:outline-accent':
                currentPage === pageNumber,
              'text-background ring-background hover:bg-mute':
                currentPage !== pageNumber,
            },
          )}
        >
          {pageNumber}
        </button>
      ))}
    </>
  );
}
