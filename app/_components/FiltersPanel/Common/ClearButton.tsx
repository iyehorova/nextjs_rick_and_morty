import { useClearSearchParams } from '@/app/hooks/useSetSearchParams';
import { clearAll } from '@/app/lib/features/filterSlice';
import { useAppDispatch } from '@/app/lib/hooks';
import Image from 'next/image';

export function ClearButton() {
  const dispatch = useAppDispatch();
  const updateParams = useClearSearchParams();

  function clearAllFilters() {
    dispatch(clearAll());
    updateParams();
  }

  return (
    <button title="Clear all filters" onClick={clearAllFilters}>
      <Image width={10} height={10} alt="clear filters" src="/img/clear.svg" />
    </button>
  );
}
