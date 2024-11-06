import { Suspense } from 'react';
import { Params } from '@/app/types/Params';
import { transformSearchParamsToString } from '@/app/utils/searchParams/transformSearchParamsToString';
import { FiltersCharactersPanel } from '@/app/_components/FiltersPanel/FiltersCharactersPanel';
import { CharactersMain } from '@/app/_components/CharactersPage';
import { Loading } from '@/app/_components/Loading';

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

      <Suspense key={query} fallback={<Loading />}>
        <CharactersMain query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
