import { CharactersList } from './CharactersList';
import { Pagination } from '../Pagination';
import { Characters } from '@/app/types/Characters';
import { fetchData } from '@/app/api/fetchData';
import { BASE_CHARACTERS_URL } from '@/app/constant';

type Props = {
  query: string;
  currentPage: number;
};

export async function CharactersMain({ query, currentPage }: Props) {
  const characters = (await fetchData(BASE_CHARACTERS_URL, query)) as Characters;

  if (!characters.results) {
    return <div className="mt-20 text-center"> No characters found</div>;
  }

  return (
    <>
      <section className="items-top mt-10 grid min-h-screen grid-cols-4 justify-items-center gap-16 pb-20">
        <CharactersList characters={characters} />
      </section>

      <Pagination
        currentPage={currentPage}
        info={characters.info}
        itemsCount={characters.results.length}
      />
    </>
  );
}
