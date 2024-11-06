import { CardDetails } from '@/app/_components/CardDetails';
import { CharactersBlock } from '@/app/_components/CharactersBlock';
import { fetchDataById } from '@/app/api/fetchData';
import { BASE_EPISODE_URL } from '@/app/constant';
import { Episode } from '@/app/types/Episode';
import { Params } from '@/app/types/Params';

export default async function EpisodeDetailsPage({
  params,
}: {
  params: Params;
}) {
  const episodeId = params?.id;
  if (!episodeId) {
    return null;
  }

  const episodeData: Episode = await fetchDataById(BASE_EPISODE_URL, episodeId);
  const { name, air_date, episode, characters } = episodeData;

  return (
    <CardDetails>
      <p>Episode {episode}: </p>{' '}
      <p className="text-4xl text-accent/70"> {name}</p>
      <p>
        Air date:<span className="text-mute"> {air_date}</span>
      </p>
      <CharactersBlock urls={characters}></CharactersBlock>
    </CardDetails>
  );
}
