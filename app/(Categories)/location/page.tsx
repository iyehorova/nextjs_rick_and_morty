import { Suspense } from 'react';
import { transformSearchParamsToString } from '@/app/utils/searchParams/transformSearchParamsToString';
import { Params } from '@/app/types/Params';
import { LocationsMain } from '@/app/_components/LocationsPage/LocationsMain';
import { Loading } from '@/app/_components/Loading';
import { FiltersLocationsPanel } from '@/app/_components/FiltersPanel/FiltersLocationsPanel';

export default function EpisodesPage({
  searchParams,
}: {
  searchParams: Params;
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = transformSearchParamsToString(searchParams);

  return (
    <main className="">
      <FiltersLocationsPanel />

      <Suspense key={query} fallback={<Loading />}>
        <LocationsMain query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
