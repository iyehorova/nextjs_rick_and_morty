import Image from "next/image";
import { Characters } from "./types/Characters";
import FilterPanel from "./_components/FiltersPanel";

export default async function Home() {
  const charactersResponse = await fetch('https://rickandmortyapi.com/api/character');
  const characters = await charactersResponse.json() as Characters;
  return (
    <main className="">
      <FilterPanel />
      <section className="grid grid-cols-4 items-center justify-items-center min-h-screen mt-10 pb-20 gap-16">
        {characters.results.map(character => (
          <div key={character.id} className="">
            <div>{character.name}</div>
            <Image
              className="dark:invert"
              src={ character.image}
              alt={character.name }
              title={character.name }
              width={180}
               height={38}
              priority
            />
            <span>{ character.status}</span>
            <div>{ `${character.species} - ${character.gender}` }</div>
          </div>
        ))}
      </section>
    </main>
  );
}
