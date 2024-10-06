import { CharacterGenders, CharacterSpecies, CharacterStatuses } from "../types/Characters";
import { FilterCharacters } from "../types/FilterBy";
import { Pages } from "../types/Pages";

export function getDropdownListData(page: string) { 
  switch (page) { 
    case Pages.character:
      return getCharactersDropdownListData();
  }
}

function getCharactersDropdownListData() {
  return [
    [FilterCharacters.status, Object.values(CharacterStatuses)],
    [FilterCharacters.species, Object.values(CharacterSpecies)],
    [FilterCharacters.gender, Object.values(CharacterGenders)]
  ]
}