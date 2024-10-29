'use client';
import { useState } from 'react';
import { getRoutesFromUrl } from '@/app/utils/getRouteFromUrl';
import { AccordionList } from './AccardionList';

type Props = {
  episodes: string[];
};

export function EpisodesList({ episodes }: Props) {
  const [isShow, setIsShow] = useState(false);

  const episodesUrl = getRoutesFromUrl(episodes);

  function handleToggleClick() {
    setIsShow(prev => !prev);
  }

  const EyesOpen = () => <img src="/img/icon-eyes.svg" alt="eyes open" />;
  const EyesClose = () => (
    <img src="/img/icon-close-eyes.svg" alt="eyes closed" />
  );

  return (
    <>
      <p className="text-slate-500">
        Episodes:{' '}
        <button
          onClick={handleToggleClick}
          className="text-slate-400"
        >
          {isShow ? (
            <span className="flex items-center gap-2">
              hide episodes <EyesOpen />
            </span>
          ) : (
            <span  className="flex items-center gap-2">
              show episodes <EyesClose />
            </span>
          )}
        </button>
      </p>

      {!episodes && <div>no episodes</div>}

      <div className="flex gap-2">
        <AccordionList isShow={isShow} episodesUrl={episodesUrl} />
      </div>
    </>
  );
}
