import clsx from "clsx";
type Props = {
  pages: number | null;
  currentPage: number;
  onPageChange: (page: number) => void;
}
export function PaginationNumbers({ pages, currentPage, onPageChange }: Props) { 
  function handlePageClick(pageNumber: number) { 
    onPageChange(pageNumber);
  }

  if (!pages) return null;
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  if (pages <= 7) {
    return (
      <>
        {pageNumbers.map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            aria-current="page"
            className={clsx(`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold
                focus:z-20 focus-visible:outline focus-visible:outline-2
               focus-visible:outline-offset-2 `,
              {
                'bg-blue-500 focus-visible:outline-blue-500 text-white': currentPage === pageNumber,
                'text-gray-900 ring-gray-300 hover:bg-gray-50':  currentPage !== pageNumber
              }
            )}
        >
            { pageNumber}
        </button>
        ))}
      </>
    )
  }

  // const firstPart = pageNumbers.slice(0, 3);
  // const secondPart = pageNumbers.slice(0, 3);
  return (
    <></>
  );
}