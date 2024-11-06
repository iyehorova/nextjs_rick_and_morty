import { useSearchParams } from 'next/navigation';
import { Params } from '../types/Params';

export function useGetSearchParams(): Params {
  const params = useSearchParams();

  const filters: Params = {};

  for (const [key, value] of params.entries()) {
    filters[key] = value;
  }

  return filters;
}

export function useGetSearchParamsByParam(param: string): string | undefined {
  const params = useSearchParams();
  return params.get(param)?.toString();
}
