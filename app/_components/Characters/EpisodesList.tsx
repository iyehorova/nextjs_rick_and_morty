'use client';
import { getRoutesFromUrl } from '@/app/utils/getRouteFromUrl';
import { useState } from 'react';
import { EpisodeItem } from './EpisodeItem';

type Props = {
  episodes: string[];
};
export function EpisodesList({ episodes }: Props) {
  const [isShow, setIsShow] = useState(false);

  const episodesUrl = getRoutesFromUrl(episodes);

  function handleToggleClick() {
    setIsShow(prev => !prev);
  }

  return (
    <>
      <p>
        Episodes:{' '}

        <button onClick={handleToggleClick}>
          {`${isShow ? 'hide episodes' : 'show episodes'}`}
        </button>
      </p>

      {!episodes && <div>no episodes</div>}

      {isShow && episodesUrl.map(url => (
        <EpisodeItem key={url} url={url }/>
      ))}
    </>
  );
}
