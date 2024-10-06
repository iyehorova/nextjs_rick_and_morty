'use client';

import { deleteFilter, toggleFilter } from '../lib/features/characters/charactersFilterSlice';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { Pages } from '../types/Pages';
import { getDropdownListData } from '../utils/getDropdownListData';
import DropdownList from './DropdownList';

export default function FiltersCharactersPanel() {
  const filters = useAppSelector(state => state.charactersFilter.filters);
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
        charactersDropdownListData.map(([filterName, options]) => {
          const name = filterName as string;
          return (
            <DropdownList
              key={name}
              filterBy={name as string}
              options={options as string[]}
              onFilterSelect={(filterOption: string) =>
                handleFilterSelect(filterOption, name)
              }
              onDeleteFilter={handleDeleteFilter}
              filters={filters}
            />
          );
        })}
    </div>
  );
}
