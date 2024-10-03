import { FilterCharacters } from "../types/FilterBy";
import DropdownList from "./DropdownList";

export default function FilterPanel() { 
  return (
    <div className="mt-5">
      <DropdownList filterBy={FilterCharacters} />
    </div>
  )
}