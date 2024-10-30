'use client';
import { useState } from 'react';

import { CharactersBlock } from '@/app/types/CharactersBlock';
import { AccordionControl } from '../Accordion/AccordionControl';
import { AccordionList } from '../Accordion/AccordionList';
import { CharactersList } from './CharactersList';

type Props = {
  charactersUrl: string[];
  charactersData: CharactersBlock;
};

export function CharactersContainer({ charactersUrl, charactersData }: Props) {
  const [isShow, setIsShow] = useState(true);

  function handleToggleClick() {
    setIsShow(prev => !prev);
  }

  return (
    <>
      <p>
        Residents:{' '}
        <AccordionControl
          isShow={isShow}
          shownText="show residents"
          hiddenText="hide residents"
          onToggleClick={handleToggleClick}
        />
      </p>

      <div className="flex flex-wrap">
        <AccordionList isShow={isShow}>
          <CharactersList
            charactersUrl={charactersUrl}
            charactersData={charactersData}
          />
        </AccordionList>
      </div>
    </>
  );
}
