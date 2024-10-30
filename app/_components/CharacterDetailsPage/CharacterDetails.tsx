import Image from 'next/image';
import Link from 'next/link';
import { Character } from '@/app/types/Characters';
import { FilterCharacters } from '@/app/types/FilterBy';
import { getRouteFromUrl } from '@/app/utils/getRouteFromUrl';
import { FilterLink } from '../CharactersBlock/FilterLink';
import { EpisodesListContainer } from './EpisodesListContainer';
import { CardDetails } from '../CardDetails';

type Props = {
  serverData: Character;
};

export function CharactersDetails({ serverData }: Props) {
  const { name, status, species, gender, image, location, episode } =
    serverData;
  const locationUrl = getRouteFromUrl(location.url);

  return (
    <CardDetails>
      <Image
        alt={name}
        src={image}
        width={400}
        height={400}
        priority
        className="mx-auto mt-2 rounded-2xl shadow-inner shadow-black"
        style={{
          clipPath:
            'polygon(100% 0, 100% 100%, 96% 94%, 81% 98%, 76% 95%, 63% 95%, 58% 99%,47% 99%, 30% 96%, 20% 90%, 7% 98%, 0 91%, 0 1%)',
        }}
      />

      <p>
        Name: <span className="text-4xl text-accent/70">{name}</span>
      </p>

      <p>
        Status:{' '}
        <FilterLink
          filter={FilterCharacters.status}
          className="link text-lg text-mute"
        >
          {status}
        </FilterLink>
      </p>

      <p>
        Species:{' '}
        <FilterLink
          filter={FilterCharacters.species}
          className="link text-lg text-mute"
        >
          {species}
        </FilterLink>
      </p>

      <p>
        Gender:{' '}
        <FilterLink
          filter={FilterCharacters.gender}
          className="link text-lg text-mute"
        >
          {gender}
        </FilterLink>
      </p>

      <p>
        Location:{' '}
        {location.name !== 'unknown' ? (
          <Link
            className="link text-lg text-mute"
            title="show location"
            href={`/${locationUrl}`}
          >
            {location.name}
          </Link>
        ) : (
          <>{location.name}</>
        )}
      </p>

      <EpisodesListContainer episodes={episode} />
    </CardDetails>
  );
}
