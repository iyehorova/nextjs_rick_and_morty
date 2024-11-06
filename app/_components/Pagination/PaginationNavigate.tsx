import { FIRST_PAGE } from '@/app/constant';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { goToPage } from '@/app/lib/features/pagesSlice';
import { useAppDispatch } from '@/app/lib/hooks';
import { CommonParams } from '@/app/types/Params';

type Props = {
  children: React.ReactNode;
  currentPage: number;
  pages: number;
};

export function PaginationNavigate({ children, currentPage, pages }: Props) {
  const updateParams = useSetSearchParams();
  const dispatch = useAppDispatch();

  function goToPrevPage() {
    const prevPage = currentPage--;
    dispatch(goToPage(prevPage));
    updateParams(CommonParams.page, `${prevPage}`);
  }

  function goToNextPage() {
    const nextPage = currentPage++;
    dispatch(goToPage(nextPage));
    updateParams(CommonParams.page, `${nextPage}`);
  }

  function goToStart() {
    dispatch(goToPage(FIRST_PAGE));
    updateParams(CommonParams.page, `${FIRST_PAGE}`);
  }

  function goToEnd() {
    if (pages) {
      dispatch(goToPage(pages));
      updateParams(CommonParams.page, `${pages}`);
    }
  }
  const isNextButtonDisabled = currentPage === pages;
  const isPrevButtonDisabled = currentPage === FIRST_PAGE;

  return (
    <div>
      <nav
        className="isolate inline-flex -space-x-px rounded-md"
        aria-label="Pagination"
      >
        <button
          onClick={goToStart}
          title={`${isPrevButtonDisabled ? '' : 'To the first page'}`}
          className="relative mx-2 inline-flex items-center rounded-l-md px-2 py-2 text-background hover:bg-mute focus:z-20 focus:outline-offset-0 disabled:text-transparent disabled:hover:bg-transparent"
          disabled={isPrevButtonDisabled}
        >
          <span className="sr-only">Previous</span>

          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8383 5.22007C15.6769 5.07962 15.4582 5.00073 15.23 5.00073C15.0019 5.00073 14.7832 5.07962 14.6218 5.22007L9.74391 9.47007C9.58272 9.6107 9.49217 9.80132 9.49217 10.0001C9.49217 10.1988 9.58272 10.3894 9.74391 10.5301L14.6218 14.7801C14.7849 14.9126 15.0008 14.9847 15.2238 14.9812C15.4468 14.9778 15.6595 14.8991 15.8173 14.7617C15.975 14.6243 16.0653 14.4389 16.0692 14.2446C16.0732 14.0503 15.9904 13.8622 15.8383 13.7201L11.5688 10.0001L15.8383 6.28007C15.9995 6.13945 16.0901 5.94882 16.0901 5.75007C16.0901 5.55132 15.9995 5.3607 15.8383 5.22007Z"
            />

            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5202 5.22007C11.3588 5.07962 11.14 5.00073 10.9119 5.00073C10.6838 5.00073 10.465 5.07962 10.3036 5.22007L5.4258 9.47007C5.2646 9.6107 5.17406 9.80132 5.17406 10.0001C5.17406 10.1988 5.2646 10.3894 5.4258 10.5301L10.3036 14.7801C10.4668 14.9126 10.6826 14.9847 10.9056 14.9812C11.1287 14.9778 11.3414 14.8991 11.4991 14.7617C11.6568 14.6243 11.7472 14.4389 11.7511 14.2446C11.7551 14.0503 11.6723 13.8622 11.5202 13.7201L7.25069 10.0001L11.5202 6.28007C11.6814 6.13945 11.772 5.94882 11.772 5.75007C11.772 5.55132 11.6814 5.3607 11.5202 5.22007Z"
            />
          </svg>
        </button>

        <button
          onClick={goToPrevPage}
          title={`${isPrevButtonDisabled ? '' : 'To the previous page'}`}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-background hover:bg-mute focus:z-20 focus:outline-offset-0 disabled:text-transparent disabled:hover:bg-transparent"
          disabled={isPrevButtonDisabled}
        >
          <span className="sr-only">Previous</span>

          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {children}

        <button
          onClick={goToNextPage}
          title={`${isNextButtonDisabled ? '' : 'To the next page'}`}
          className="relative mx-2 inline-flex items-center rounded-r-md px-2 py-2 text-background hover:bg-mute focus:z-20 focus:outline-offset-0 disabled:text-transparent disabled:hover:bg-transparent"
          disabled={isNextButtonDisabled}
        >
          <span className="sr-only">Next</span>

          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="w-2"></div>

        <button
          onClick={goToEnd}
          title={`${isNextButtonDisabled ? '' : 'To the last page'}`}
          className="relative mx-5 inline-flex items-center rounded-r-md px-2 py-2 text-background hover:bg-mute focus:z-20 focus:outline-offset-0 disabled:text-transparent disabled:hover:bg-transparent"
          disabled={isNextButtonDisabled}
        >
          <span className="sr-only">Next</span>

          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.20707 5.22007C7.36846 5.07962 7.58725 5.00073 7.81536 5.00073C8.04347 5.00073 8.26226 5.07962 8.42366 5.22007L13.3015 9.47007C13.4627 9.6107 13.5532 9.80132 13.5532 10.0001C13.5532 10.1988 13.4627 10.3894 13.3015 10.5301L8.42366 14.7801C8.26048 14.9126 8.04465 14.9847 7.82165 14.9812C7.59864 14.9778 7.38587 14.8991 7.22816 14.7617C7.07045 14.6243 6.9801 14.4389 6.97617 14.2446C6.97224 14.0503 7.05501 13.8622 7.20707 13.7201L11.4766 10.0001L7.20707 6.28007C7.04587 6.13945 6.95532 5.94882 6.95532 5.75007C6.95532 5.55132 7.04587 5.3607 7.20707 5.22007Z"
            />

            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5252 5.22007C11.6866 5.07962 11.9054 5.00073 12.1335 5.00073C12.3616 5.00073 12.5804 5.07962 12.7418 5.22007L17.6196 9.47007C17.7808 9.6107 17.8714 9.80132 17.8714 10.0001C17.8714 10.1988 17.7808 10.3894 17.6196 10.5301L12.7418 14.7801C12.5786 14.9126 12.3628 14.9847 12.1398 14.9812C11.9168 14.9778 11.704 14.8991 11.5463 14.7617C11.3886 14.6243 11.2982 14.4389 11.2943 14.2446C11.2904 14.0503 11.3731 13.8622 11.5252 13.7201L15.7947 10.0001L11.5252 6.28007C11.364 6.13945 11.2734 5.94882 11.2734 5.75007C11.2734 5.55132 11.364 5.3607 11.5252 5.22007Z"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
