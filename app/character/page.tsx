import { Suspense } from 'react';
import { FiltersCharactersPanel } from '@/app/_components/FiltersPanel';
import { CharactersMain } from '@/app/_components/Characters';

import { Params } from '@/app/types/Params';
import { transformSearchParamsToString } from '@/app/utils/searchParams/transformSearchParamsToString';

export default function Page({ searchParams }: { searchParams?: Params }) {
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