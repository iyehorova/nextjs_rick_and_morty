import Image from 'next/image';
import { fetchDataById } from '../../api/fetchData';
import { Character } from '../../types/Characters';
import { Params } from '../../types/Params';
import Link from 'next/link';
import { getRouteFromUrl } from '../../utils/getRouteFromUrl';
import { EpisodesList } from '../../_components/Characters/EpisodesList';
import { BASE_CHARACTERS_URL } from '../../constant';
import { FilterLink } from '@/app/utils/FilterLink';
import { FilterCharacters } from '@/app/types/FilterBy';

export default async function PageDetails({ params }: { params?: Params }) {
  const currentId = params?.id;

  if (!currentId) {
    return null;
  }

  const data: Character = await fetchDataById(BASE_CHARACTERS_URL, currentId);
  const {
    name,
    status,
    species,
    gender,
    image,
    location,
    episode,
  } = data;
  const locationUrl = getRouteFromUrl(location.url);


  return (
    <>
      <Image alt={name} src={image} width={300} height={150} />
      <p>Name: {name}</p>
      <p>Status: <FilterLink filter={ FilterCharacters.status}>{status}</FilterLink></p>
      <p>Species: <FilterLink filter={ FilterCharacters.species}>{species}</FilterLink></p>
      <p>Gender: <FilterLink filter={ FilterCharacters.gender}>{gender}</FilterLink></p>
      <p>
        Location: {location.name} <Link href={`/${locationUrl}`}>Show location</Link>
      </p>

      <EpisodesList episodes={episode} />
    </>
  );
}
