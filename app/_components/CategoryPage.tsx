import { Suspense } from 'react';
import { Params } from '@/app/types/Params';
import { transformSearchParamsToString } from '@/app/utils/searchParams/transformSearchParamsToString';
import { CharactersMain } from './CharactersPage';

type Props = {
  searchParams: Params | undefined;
  children: React.ReactNode;
};

export function CategoryPage({ searchParams, children }: Props) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = transformSearchParamsToString(searchParams);

  return (
    <main className="">
      {children}

      <Suspense key={query} fallback={<div>Loading...</div>}>
        <CharactersMain query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
