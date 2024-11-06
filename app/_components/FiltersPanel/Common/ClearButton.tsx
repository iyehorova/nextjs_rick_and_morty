import { useClearSearchParams } from '@/app/hooks/useSetSearchParams';
import { clearAll } from '@/app/lib/features/filterSlice';
import { useAppDispatch } from '@/app/lib/hooks';
import IconClear from '@/app/UI/IconClear';

export function ClearButton() {
  const dispatch = useAppDispatch();
  const updateParams = useClearSearchParams();

  function clearAllFilters() {
    dispatch(clearAll());
    updateParams();
  }

  return (
    <button title="Clear all filters" onClick={clearAllFilters}>
      <IconClear fill="#a3e635" width="12" height="12" />
    </button>
  );
}
