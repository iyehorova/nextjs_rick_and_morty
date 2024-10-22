import { fetchCharactersByIds } from '@/app/api/fetchData';
import {
  getIdsFromUrl,
  getRoutesFromUrl,
} from '@/app/utils/getRouteFromUrl';
import { CharacterItem } from './CharacterItem';

type Props = {
  urls: string[];
};
export async function CharactersBlock({ urls }: Props) {
  const charactersUrl = getRoutesFromUrl(urls);
  const charactersIds = getIdsFromUrl(charactersUrl);
  const charactersData = await fetchCharactersByIds(charactersIds);

  if (!charactersData) { 
    return <p>No one lives here</p>
  }

  return (
    <>
      <p>Residents: </p>
      
      <div className="flex flex-wrap">
        {charactersUrl.map(url => (
          <CharacterItem key={url} url={url} charactersData={charactersData} />
        ))}
      </div>
    </>
  );
}
