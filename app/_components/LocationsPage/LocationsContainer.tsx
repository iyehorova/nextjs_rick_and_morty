'use client';
import { Locations } from '@/app/types/Location';
import { UfoFlying } from '../UfoFlying';
import { useFlyingUfo } from '@/app/hooks/useFlyingUfo';
import { LocationItem } from './LocationItem';

type Props = {
  locations: Locations;
};

export function LocationsContainer({ locations }: Props) {
  const isFlying = useFlyingUfo();

  return (
    <>
      {isFlying && (
        <UfoFlying className="absolute left-0 z-20 w-screen md:h-[calc(100vh-200px)] md:w-auto" />
      )}

      <div className="justify-items-left grid max-h-min grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {locations.results?.map(location => (
          <LocationItem key={location.id} location={location} />
        ))}
      </div>
    </>
  );
}
