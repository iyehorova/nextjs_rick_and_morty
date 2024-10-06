'use client';

import { toggleFilter } from '../lib/features/characters/charactersFilterSlice';
import { useAppDispatch } from '../lib/hooks';
import { Pages } from '../types/Pages';
import { getDropdownListData } from '../utils/getDropdownListData';
import DropdownList from './DropdownList';

export default function FiltersCharactersPanel() {
  const dispatch = useAppDispatch();
  const charactersDropdownListData = getDropdownListData(Pages.character);
  function handleFilterSelect(filterOption: string, filterName: string) {
    
    const lowFilterOption = filterOption.toLowerCase();
    dispatch(toggleFilter({ filterName, filterOption: lowFilterOption }));
  }
  return (
    <div className="mt-5">
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
            />
          );
        })}
      {/* <DropdownList filterBy={FilterCharacters.status} options={characterStatuses} onFilterSelect={} /> */}
      {/* <DropdownList filterBy={FilterCharacters.species} options={characterGenderes} onFilterSelect={} /> */}
      {/* <DropdownList filterBy={FilterCharacters.gender} options={characterSpecies } onFilterSelect={} /> */}
    </div>
  );
}
