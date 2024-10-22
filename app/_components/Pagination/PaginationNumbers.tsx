'use client';
import clsx from 'clsx';
import { MAX_PAGINATION_ITEMS } from '../../constant';
import { goToPage } from '../../lib/features/pagesSlice';
import { useAppDispatch } from '../../lib/hooks';
import { useSetSearchParams } from '../../hooks/useSetSearchParams';

type Props = {
  pages: number;
  currentPage: number;
};

export function PaginationNumbers({ pages, currentPage }: Props) {
  const dispatch = useAppDispatch();
  const updateParams = useSetSearchParams();

  function handlePageClick(pageNumber: number) {
    dispatch(goToPage(pageNumber));
    updateParams('page', `${pageNumber}`);
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
              'bg-blue-500 text-white focus-visible:outline-blue-500':
                currentPage === pageNumber,
              'text-gray-900 ring-gray-300 hover:bg-gray-50':
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
