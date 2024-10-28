import { CharactersBlock } from '@/app/_components/CharactersBlock';
import { fetchDataById } from '@/app/api/fetchData';
import { BASE_LOCATION_URL } from '@/app/constant';
import { Location } from '@/app/types/Location';
import { Params } from '@/app/types/Params';

export default async function LocationPage({ params }: { params: Params }) {
  const id = params?.id;

  if (!id) {
    return null;
  }

  const data: Location = await fetchDataById(BASE_LOCATION_URL, id);
  const { name, type, dimension, residents } = data;

  return (
    <>
      <p>Location: {name}</p>
      <p>Type: {type}</p>

      <p>Dimension: {dimension}</p>
      <CharactersBlock urls={residents} />
    </>
  );
}
