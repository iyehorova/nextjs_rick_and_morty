import { Pages } from '@/app/types/Pages';
import { getDropdownListData } from '@/app/utils/getDropdownListData';
import { FilterPanel } from './Common/FilterPanel';

export function FiltersLocationsPanel() {
  const locationsDropdownListData = getDropdownListData(Pages.location);

  return <FilterPanel dropdownListData={locationsDropdownListData} />;
}
