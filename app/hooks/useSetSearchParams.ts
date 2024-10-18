import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function useSetSearchParams() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  
  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    
    if (value === null) { 
      replace(`${pathname}?${key}`);
      return;
    }
    
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return updateParams;
};