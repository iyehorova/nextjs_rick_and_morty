import Link from 'next/link';
import { Links } from '@/app/types/Links';
import { Location } from '@/app/types/Location';

type Props = {
  location: Location;
};

export function LocationItem({ location }: Props) {
  const { id, name, residents } = location;

  return (
    <div
      key={id}
      className="break-words rounded-md bg-background p-3 transition-all duration-500 hover:scale-[1.1] hover:text-accent/80"
    >
      <Link href={`${Links.Locations}/${id}`}>
        <div>
          <span className="text-mute/90">Location {id}:</span>{' '}
          <p className="text-3xl">{name}</p>
        </div>

        <p className="text-mute/90">{residents.length} residents</p>
      </Link>
    </div>
  );
}
