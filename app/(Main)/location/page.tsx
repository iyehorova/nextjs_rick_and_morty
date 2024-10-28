import { transformSearchParamsToString } from "@/app/utils/searchParams/transformSearchParamsToString";
import { Suspense } from "react";
import { FiltersLocationsPanel } from '../../_components/FiltersPanel/FiltersLocationsPanel';
import { Params } from '../../types/Params';
import { LocationsMain } from "../../_components/LocationsPage/LocationsMain";
import { Loading } from "../../_components/Loading";

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
  )
}