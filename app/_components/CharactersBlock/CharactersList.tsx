import { CharactersBlock } from '@/app/types/CharactersBlock';
import { CharacterItem } from './CharacterItem';
import { AccordionItem } from '../Accordion/AccordionItem';

type Props = {
  charactersUrl: string[];
  charactersData: CharactersBlock;
};

export function CharactersList({ charactersUrl, charactersData }: Props) {
  return (
    <>
      {charactersUrl.map(url => (
        <AccordionItem key={url} className="h-16 w-16">
          <CharacterItem url={url} charactersData={charactersData} />
        </AccordionItem>
      ))}
    </>
  );
}
