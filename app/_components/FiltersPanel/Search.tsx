import { useGetSearchParamsByParam } from '@/app/hooks/useGetSearchParams';
import { useDebounceSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { changeQuery } from '@/app/lib/features/filterSlice';
import { useAppDispatch } from '@/app/lib/hooks';
import { CommonParams } from '@/app/types/Params';
import { useEffect, useState } from 'react';

export function Search() {
  const initialValue = useGetSearchParamsByParam(CommonParams.query) || '';
  const [inputValue, setInputValue] = useState(initialValue);
  const updateParams = useDebounceSetSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
    updateParams(value);
    dispatch(changeQuery(value));
  }

  return (
    <input
      className="peer block rounded-md px-3 py-2 text-sm shadow-sm outline-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 hover:bg-gray-50 focus:border-none focus:outline-none"
      placeholder="Enter name"
      onChange={handleSearch}
      value={inputValue}
    />
  );
}
