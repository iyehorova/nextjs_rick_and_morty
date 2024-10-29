import Image from 'next/image';
import Link from 'next/link';
import { Character } from '@/app/types/Characters';
import { FilterCharacters } from '@/app/types/FilterBy';
import { getRouteFromUrl } from '@/app/utils/getRouteFromUrl';
import { FilterLink } from '../CharactersBlock/FilterLink';
import { EpisodesList } from './EpisodesList';

type Props = {
  serverData: Character;
};
export function CharactersDetails({ serverData }: Props) {
  const { name, status, species, gender, image, location, episode } =
    serverData;
  const locationUrl = getRouteFromUrl(location.url);
  return (
    <div className="mx-auto my-6 flex max-w-[480px] flex-col gap-2 rounded-xl bg-background p-3 sm:p-5 md:p-10">
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
          mixBlendMode: 'hard-light',
        }}
      />

      <p className="text-slate-500">
        Name: <span className="text-4xl text-accent/70">{name}</span>
      </p>

      <p className="text-slate-500">
        Status:{' '}
        <FilterLink
          filter={FilterCharacters.status}
          className="link text-lg text-slate-400"
        >
          {status}
        </FilterLink>
      </p>

      <p className="text-slate-500">
        Species:{' '}
        <FilterLink
          filter={FilterCharacters.species}
          className="link text-lg text-slate-400"
        >
          {species}
        </FilterLink>
      </p>

      <p className="text-slate-500">
        Gender:{' '}
        <FilterLink
          filter={FilterCharacters.gender}
          className="link text-lg text-slate-400"
        >
          {gender}
        </FilterLink>
      </p>

      <p className="text-slate-500">
        Location:{' '}
        <Link
          className="link text-lg text-slate-400"
          title="show location"
          href={`/${locationUrl}`}
        >
          {location.name}
        </Link>
      </p>

      <EpisodesList episodes={episode} />
    </div>
  );
}