import { useSearchParams } from 'next/navigation';
import { useAppSelector } from '../lib/hooks';
import { getFiltersParams } from '../utils/searchParams/getFiltersParams';
import { useSetSearchParams } from './useSetSearchParams';
import { useMemo, useEffect } from 'react';
import { selectFilters } from '../lib/features/characters/charactersFilterSlice';

export function useUrlSyncWithFilter() {
  const params = useSearchParams();
  const filters = useAppSelector(selectFilters);
  const updateParams = useSetSearchParams();
  
  const searchParams = useMemo(() =>  new URLSearchParams(params), [params]);
  const areFiltersMissingInUrl = useMemo(() => {
    return Object.entries(filters).some(([key, value]) => {
      const urlValue = searchParams.get(key);
      return urlValue !== value;
    });
  }, [filters, searchParams]);

  const paramsToString = useMemo(() => getFiltersParams(filters, 1), [filters]);

  useEffect(() => {
    if (areFiltersMissingInUrl) {
      updateParams(paramsToString, null);
    }
  }, [areFiltersMissingInUrl, paramsToString, updateParams]);
}
