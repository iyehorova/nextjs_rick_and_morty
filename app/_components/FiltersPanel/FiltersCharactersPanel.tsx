'use client';

import {
  deleteFilter,
  toggleFilter,
} from '@/app/lib/features/characters/charactersFilterSlice';
import { useAppDispatch } from '@/app/lib/hooks';
import { Pages } from '@/app/types/Pages';
import { getDropdownListData } from '@/app/utils/getDropdownListData';
import DropdownList from './DropdownList';
import { Search } from './Search';
import { ClearButton } from './ClearButton';
import { useGetSearchParams } from '@/app/hooks/useGetSearchParams';

export function FiltersCharactersPanel() {
  const filters = useGetSearchParams();

  const dispatch = useAppDispatch();
  const charactersDropdownListData = getDropdownListData(Pages.character);

  function handleFilterSelect(filterOption: string, filterName: string) {
    dispatch(toggleFilter({ filterName, filterOption }));
  }

  function handleDeleteFilter(filterName: string) {
    dispatch(deleteFilter(filterName));
  }
  const isFiltersApplied = Object.keys(filters).length > 0;

  return (
    <div className="mt-5 flex gap-8">
      {charactersDropdownListData &&
        charactersDropdownListData.map(([filterName, options]) => (
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
