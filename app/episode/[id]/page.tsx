import { CharactersBlock } from '@/app/_components/Common/CharactersBlock';
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
    <>
      <p>Episode: {name}</p>
      <p>Air date: {air_date}</p>
      <p>Code: {episode}</p>

      <CharactersBlock urls={characters}></CharactersBlock>
    </>
  );
}
