'use client';

import { useGetFilters } from '../hooks/useGetFilters';
import {
  deleteFilter,
  toggleFilter,
} from '../lib/features/characters/charactersFilterSlice';
import { useAppDispatch } from '../lib/hooks';
import { Pages } from '../types/Pages';
import { getDropdownListData } from '../utils/getDropdownListData';
import DropdownList from './DropdownList';

export function FiltersCharactersPanel() {
  const filters = useGetFilters();

  const dispatch = useAppDispatch();
  const charactersDropdownListData = getDropdownListData(Pages.character);

  function handleFilterSelect(filterOption: string, filterName: string) {
    dispatch(toggleFilter({ filterName, filterOption }));
  }

  function handleDeleteFilter(filterName: string) {
    dispatch(deleteFilter(filterName));
  }
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
    </div>
  );
}
