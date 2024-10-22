import { CharacterGenders, CharacterSpecies, CharacterStatuses } from "../types/Characters";
import { DropdownListData } from "../types/DropdownList";
import { FilterCharacters } from "../types/FilterBy";
import { Pages } from "../types/Pages";


export function getDropdownListData(page: string): DropdownListData[] | undefined { 
  switch (page) { 
    case Pages.character:
      return getCharactersDropdownListData();
    case Pages.episode:
      return;
  }
}

function getCharactersDropdownListData(): DropdownListData[] {
  return [
    [FilterCharacters.status, Object.values(CharacterStatuses)],
    [FilterCharacters.species, Object.values(CharacterSpecies)],
    [FilterCharacters.gender, Object.values(CharacterGenders)]
  ]
}

