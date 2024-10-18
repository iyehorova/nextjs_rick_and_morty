import { Suspense } from 'react';
import { FiltersCharactersPanel } from './_components/FiltersCharactersPanel';
import { CharactersMain } from './_components/CharactersMain';

import { Params } from './types/Params';
import { transformSearchParamsToString } from './utils/searchParams/transformSearchParamsToString';

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
