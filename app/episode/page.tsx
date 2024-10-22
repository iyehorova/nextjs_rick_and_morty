import { transformSearchParamsToString } from "@/app/utils/searchParams/transformSearchParamsToString";
import { Suspense } from "react";
import { FiltersEpisodesPanel } from '../_components/FiltersPanel/FiltersEpisodesPanel';
import { Params } from '../types/Params';
import { EpisodesMain } from "../_components/EpisodesPage/EpisodesMain";

export default function EpisodesPage({
  searchParams,
}: {
  searchParams: Params;
  }) {
    const currentPage = Number(searchParams?.page) || 1;
  const query = transformSearchParamsToString(searchParams);
  return (
    <main className="">
      <FiltersEpisodesPanel />
      <Suspense key={query} fallback={<div>Loading...</div>}>
        <EpisodesMain query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  )
}
