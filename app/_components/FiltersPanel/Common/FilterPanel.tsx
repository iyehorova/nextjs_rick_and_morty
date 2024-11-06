'use client';
import { DropdownListData } from '@/app/types/DropdownList';
import DropdownList from './DropdownList';
import { CommonParams } from '@/app/types/Params';
import { Search } from '../Search';
import { ClearButton } from './ClearButton';
import { useGetSearchParams } from '@/app/hooks/useGetSearchParams';
import { useAppDispatch } from '@/app/lib/hooks';
import { deleteFilter, toggleFilter } from '@/app/lib/features/filterSlice';

type Props = {
  dropdownListData: DropdownListData[] | undefined;
};

export function FilterPanel({ dropdownListData }: Props) {
  const dispatch = useAppDispatch();
  const filters = useGetSearchParams();
  
  function handleFilterSelect(filterOption: string, filterName: string) {
    dispatch(toggleFilter({ filterName, filterOption }));
  }

  function handleDeleteFilter(filterName: string) {
    dispatch(deleteFilter(filterName));
  }
  const isOnlyPageChoose =
    Object.keys(filters).length === 1 && !!filters[CommonParams.page];
  const isFiltersApplied = Object.keys(filters).length > 0 && !isOnlyPageChoose;

  return (
    <div className="my-16 flex flex-col gap-8 md:flex-row">
      {dropdownListData &&
        dropdownListData.map(([filterName, options]) => (
          <DropdownList
            key={filterName}
            filterBy={filterName}
            options={options}
            onFilterSelect={(filterOption: string) =>
              handleFilterSelect(filterOption, filterName)
            }
            onDeleteFilter={handleDeleteFilter}
            filters={filters}
          />
        ))}
      <Search />
      {isFiltersApplied && <ClearButton />}
    </div>
  );
}
