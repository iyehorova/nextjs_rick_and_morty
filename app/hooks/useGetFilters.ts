import { selectFilters } from "../lib/features/characters/charactersFilterSlice";
import { useAppSelector } from "../lib/hooks";
import { Params } from "../types/Params";
import { useGetSearchParams } from "./useGetSearchParams";
import { useUrlSyncWithFilter } from "./useUrlSyncWithFilter";

export function useGetFilters(): Params {
  const filterParams = useGetSearchParams();
  const selectedFilters = useAppSelector(selectFilters);
  useUrlSyncWithFilter();
  
  return !Object.keys(selectedFilters).length ? filterParams : selectedFilters;
}