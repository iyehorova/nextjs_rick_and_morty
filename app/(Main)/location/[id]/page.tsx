import { CardDetails } from '@/app/_components/CardDetails';
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
    <CardDetails>
      <p>Location: </p> <p className="text-4xl text-accent/70">{name}</p>
      <p>Type: <span className="text-slate-400">{type}</span></p>

      <p>Dimension: <span className="text-slate-400">{dimension}</span></p>
      <CharactersBlock urls={residents} />
    </CardDetails>
  );
}
