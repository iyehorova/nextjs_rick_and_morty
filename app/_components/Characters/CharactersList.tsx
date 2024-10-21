'use client';
import Image from 'next/image';
import { Characters } from '../../types/Characters';
import Link from 'next/link';
import { Links } from '@/app/types/Links';

type Props = {
  characters: Characters;
};

export function CharactersList({ characters }: Props) {
  return (
    <>
      {characters.results?.map(character => (
        
        <div key={character.id} className="">
          <Link href={`${Links.character}/${character.id}`}>
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
          </Link>
        </div>
      ))}
    </>
  );
}
