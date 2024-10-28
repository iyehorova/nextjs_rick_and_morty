import Image from 'next/image';
import Link from 'next/link';
import { fetchDataById } from '@/app/api/fetchData';
import { FilterCharacters } from '@/app/types/FilterBy';
import { Character } from '@/app/types/Characters';
import { Params } from '@/app/types/Params';
import { BASE_CHARACTERS_URL } from '@/app/constant';
import { FilterLink } from '@/app/utils/FilterLink';
import { getRouteFromUrl } from '@/app/utils/getRouteFromUrl';
import { EpisodesList } from '@/app/_components/CharactersPage/EpisodesList';

export default async function PageDetails({ params }: { params?: Params }) {
  const currentId = params?.id;

  if (!currentId) {
    return null;
  }

  const data: Character = await fetchDataById(BASE_CHARACTERS_URL, currentId);
  const { name, status, species, gender, image, location, episode } = data;
  const locationUrl = getRouteFromUrl(location.url);

  return (
    <>
      <Image alt={name} src={image} width={300} height={150} />
      <p>Name: {name}</p>
      <p>
        Status:{' '}
        <FilterLink filter={FilterCharacters.status}>{status}</FilterLink>
      </p>
      <p>
        Species:{' '}
        <FilterLink filter={FilterCharacters.species}>{species}</FilterLink>
      </p>
      <p>
        Gender:{' '}
        <FilterLink filter={FilterCharacters.gender}>{gender}</FilterLink>
      </p>
      <p>
        Location: {location.name}{' '}
        <Link href={`/${locationUrl}`}>Show location</Link>
      </p>

      <EpisodesList episodes={episode} />
    </>
  );
}
