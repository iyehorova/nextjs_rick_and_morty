import FiltersCharactersPanel from './_components/FiltersCharactersPanel';
import { CharactersList } from './_components/CharactersList';
import { Characters } from './types/Characters';
import { BASE_CHARACTERS_URL } from './constant';

export default async function Home() {
  const charactersResponse = await fetch(BASE_CHARACTERS_URL);
  const characters = (await charactersResponse.json()) as Characters;
  return (
    <main className="">
      <FiltersCharactersPanel />
      <section className="mt-10 grid min-h-screen grid-cols-4 items-center justify-items-center gap-16 pb-20">
        <CharactersList characters={characters} />
      </section>
    </main>
  );
}
