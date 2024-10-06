'use client'
import Image from "next/image";
import { useGetFilterCharactersQuery } from "../lib/features/characters/charactersApi";
import { Characters } from "../types/Characters";
import { getFiltersParams } from "../utils/getFiltersParams";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { refreshState } from "../lib/features/characters/charactersPagesSlice";
import { useEffect } from "react";
import { ResponseInfo } from "../types/ResponseInfo";

type Props = {
  characters: Characters
}
export function CharactersList({ characters }: Props) {
  const filters = useAppSelector(state => state.charactersFilter.filters);
  const currentPage = useAppSelector(state => state.charactersPages.currentPage);
  const paramsToString = getFiltersParams(filters, currentPage);
  const { data: filteredCharacters, isLoading, isError, error } = useGetFilterCharactersQuery(paramsToString);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filteredCharacters) {
      const info = filteredCharacters.info as ResponseInfo;
      const itemsCount = filteredCharacters.results.length;
      dispatch(refreshState({ info, itemsCount }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  console.log('filteredCharacters', filteredCharacters);

  if (isLoading) return <div className='col-span-full'>Loading...</div>;
  if (isError) {
    if ((error as FetchBaseQueryError)?.status === 404) {
      return <div className='col-span-full'>Characters not found.</div>;
    }
    return <div className='col-span-full'>Error loading characters.</div>;
  }

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
