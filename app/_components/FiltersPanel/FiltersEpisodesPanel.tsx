import { Pages } from '@/app/types/Pages';
import { getDropdownListData } from '@/app/utils/getDropdownListData';
import { FilterPanel } from './Common/FilterPanel';

export function FiltersEpisodesPanel() {
  const episodesDropdownListData = getDropdownListData(Pages.episode);

  return <FilterPanel dropdownListData={episodesDropdownListData} />;
}
