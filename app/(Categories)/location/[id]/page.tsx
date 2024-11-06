import { CardDetails } from '@/app/_components/CardDetails';
import { CharactersBlock } from '@/app/_components/CharactersBlock';
import { fetchDataById } from '@/app/api/fetchData';
import { BASE_LOCATION_URL } from '@/app/constant';
import { Location } from '@/app/types/Location';
import { Params } from '@/app/types/Params';

export default async function LocationPage({ params }: { params: Params }) {
  const locationId = params?.id;

  if (!locationId) {
    return null;
  }

  const data: Location = await fetchDataById(BASE_LOCATION_URL, locationId);
  const { id, name, type, dimension, residents } = data;

  return (
    <CardDetails>
      <p>Location {id}: </p>
      <p className="text-4xl text-accent/70">{name}</p>
      <p>
        Type: <span className="text-mute">{type}</span>
      </p>
      <p>
        Dimension: <span className="text-mute">{dimension}</span>
      </p>
      <CharactersBlock urls={residents} />
    </CardDetails>
  );
}
