import { Pages } from '@/app/types/Pages';
import { getDropdownListData } from '@/app/utils/getDropdownListData';
import { FilterPanel } from './Common/FilterPanel';

export function FiltersCharactersPanel() {
  const charactersDropdownListData = getDropdownListData(Pages.character);

  return <FilterPanel dropdownListData={charactersDropdownListData} />;
}
