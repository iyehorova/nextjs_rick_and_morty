import { Characters } from '@/app/types/Characters';
import { CharacterItem } from './CharacterItem';

type Props = {
  characters: Characters;
};

export function CharactersList({ characters }: Props) {
  return (
    <>
      {characters.results?.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </>
  );
}
