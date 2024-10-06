'use client'
import Image from "next/image";
import { useGetFilterCharactersQuery } from "../lib/features/characters/charactersApi";
import { Characters } from "../types/Characters";
import { getFiltersParams } from "../utils/getFiltersParams";
import { useAppSelector } from "../lib/hooks";
// import { useMultiFilterQuery } from "../lib/features/characters/useMultyFilterQuery";
type Props = {
  characters: Characters
}
export function CharactersList({ characters }: Props) {
  const filters = useAppSelector(state => state.charactersFilter.filters);
  const filtersToString = getFiltersParams(filters);
  const { data: filteredCharacters, isLoading, isError } = useGetFilterCharactersQuery(filtersToString);
  // const { combinedData: filteredCharacters, isLoading, isError } = useMultiFilterQuery(filters);
  // console.log('characters', characters);
  // console.log('isLoading', isLoading);
  // console.log('isError', isError);
   console.log('filters', filters);
   console.log('filtersToString', filtersToString);
   console.log('filteredCharacters', filteredCharacters);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading characters.</div>;

  const visibleCharacters = filteredCharacters?.results.length ? filteredCharacters.results : characters.results ;
  return (
    <>
      {visibleCharacters?.map(character => (
        <div key={character.id} className="">
          <div>{character.name}</div>
          <Image
            className="dark:invert"
            src={character.image}
            alt={character.name}
            title={character.name}
            width={180}
            height={38}
            priority
          />
          <span>{character.status}</span>
          <div>{`${character.species} - ${character.gender}`}</div>
        </div>
      ))}
    </>
  );
}
