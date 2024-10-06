'use client';

import clsx from 'clsx';
import {
  MouseEvent,
  useState,
} from 'react';


type Props = {
  filterBy: string;
  options: string[];
  onFilterSelect: (value: string) => void;
}
export default function DropdownList({ filterBy, options, onFilterSelect }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  

  function handleFilterSelect(event: MouseEvent<HTMLLabelElement>) {
    const labelElement = event.currentTarget;
    const inputElement = labelElement.querySelector('input') as HTMLInputElement;
    
    if (inputElement) {
      const currentFilter = inputElement.name; 
      onFilterSelect(currentFilter);
    }
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          { filterBy}
          <img src="/img/icon-arrow.svg" width={20} height={20} alt="" />
        </button>
      </div>

      <div
        className={clsx(
          `absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`,
          { hidden: !isOpen },
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <form>
            {options.map(option => (
              <label
                key={option}
                className="flex justify-between px-4 py-2 text-sm text-gray-700"
                role="selectitem"
                tabIndex={-1}
                id="menu-item-0"
                onClick={handleFilterSelect}
              >
                {option}
                <input type="checkbox" name={option}></input>
              </label>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}
