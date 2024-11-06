import {
  CharacterGenders,
  CharacterSpecies,
  CharacterStatuses,
} from '@/app/types/Characters';
import { DropdownListData } from '@/app//types/DropdownList';
import { FilterCharacters } from '@/app//types/FilterBy';
import { Pages } from '@/app//types/Pages';

export function getDropdownListData(
  page: string,
): DropdownListData[] | undefined {
  switch (page) {
    case Pages.character:
      return getCharactersDropdownListData();
    case Pages.episode:
      return;
    default:
      return;
  }
}

function getCharactersDropdownListData(): DropdownListData[] {
  return [
    [FilterCharacters.status, Object.values(CharacterStatuses)],
    [FilterCharacters.species, Object.values(CharacterSpecies)],
    [FilterCharacters.gender, Object.values(CharacterGenders)],
  ];
}
