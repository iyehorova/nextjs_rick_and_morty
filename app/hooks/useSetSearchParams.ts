import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { CommonParams } from '../types/Params';

export function useSetSearchParams() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const updateParams = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams);

    if (params.get(key) === value || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    if (key !== CommonParams.page) {
      params.delete(CommonParams.page);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return updateParams;
}

export function useDebounceSetSearchParams() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const updateParams = useDebouncedCallback((value: string | undefined) => {
    const params = new URLSearchParams(searchParams);

    if (params.get(CommonParams.query) === value || !value) {
      params.delete(CommonParams.query);
    } else {
      params.set(CommonParams.query, value);
    }

    if (params.get(CommonParams.page)) {
      params.delete(CommonParams.page);
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return updateParams;
}

export function useClearSearchParams() {
  const { replace } = useRouter();
  const pathname = usePathname();

  const updateParams = () => {
    replace(`${pathname}`);
  };

  return updateParams;
}
