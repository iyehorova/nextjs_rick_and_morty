'use client';
import { useState } from 'react';
import { getRoutesFromUrl } from '@/app/utils/getRouteFromUrl';
import { AccordionList } from '../Accordion/AccordionList';
import { EpisodeList } from './EpisodeList';
import { AccordionControl } from '../Accordion/AccordionControl';

type Props = {
  episodes: string[];
};

export function EpisodesListContainer({ episodes }: Props) {
  const [isShow, setIsShow] = useState(false);
  const episodesUrl = getRoutesFromUrl(episodes);

  function handleToggleClick() {
    setIsShow(prev => !prev);
  }

  return (
    <>
      <p className="text-mute/90">
        Episodes:{' '}
        <AccordionControl
          isShow={isShow}
          shownText="show episodes"
          hiddenText="hide episodes"
          onToggleClick={handleToggleClick}
        />
      </p>

      {!episodes && <div>no episodes</div>}

      <div className="flex gap-2">
        <AccordionList isShow={isShow}>
          <EpisodeList episodesUrl={episodesUrl} />
        </AccordionList>
      </div>
    </>
  );
}
