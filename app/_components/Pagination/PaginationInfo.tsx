import { ITEMS_PER_PAGE } from '@/app/constant';

type Props = {
  currentPage: number;
  allItems: number;
  pages: number;
};

export function PaginationInfo({ currentPage, allItems, pages }: Props) {
  const start = ITEMS_PER_PAGE * currentPage - ITEMS_PER_PAGE + 1;
  const end = currentPage !== pages ? ITEMS_PER_PAGE * currentPage : allItems;

  return (
    <div className="hidden sm:block">
      <p className="text-sm text-background">
        Showing <span className="font-medium">{start}</span> to{' '}
        <span className="font-medium">{end}</span> of{' '}
        <span className="font-medium">{allItems}</span> results
      </p>
    </div>
  );
}
