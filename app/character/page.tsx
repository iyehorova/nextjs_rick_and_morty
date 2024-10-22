import { FiltersCharactersPanel } from '@/app/_components/FiltersPanel/FiltersCharactersPanel';
import { transformSearchParamsToString } from '@/app/utils/searchParams/transformSearchParamsToString';
import { Suspense } from 'react';
import { Params } from '@/app/types/Params';
import { CharactersMain } from '../_components/CharactersPage';

export default function CharactersPage({
  searchParams,
}: {
  searchParams?: Params;
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = transformSearchParamsToString(searchParams);
  return (
    <main className="">
      <FiltersCharactersPanel />
      <Suspense key={query} fallback={<div>Loading...</div>}>
        <CharactersMain query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
