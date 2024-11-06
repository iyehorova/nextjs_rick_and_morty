import { fetchDataById } from '@/app/api/fetchData';
import { Character } from '@/app/types/Characters';
import { Params } from '@/app/types/Params';
import { BASE_CHARACTERS_URL } from '@/app/constant';
import { CharactersDetails } from '@/app/_components/CharacterDetailsPage/CharacterDetails';

export default async function PageDetails({ params }: { params?: Params }) {
  const currentId = params?.id;

  if (!currentId) {
    return null;
  }

  const data: Character = await fetchDataById(BASE_CHARACTERS_URL, currentId);

  return <CharactersDetails serverData={data} />;
}
