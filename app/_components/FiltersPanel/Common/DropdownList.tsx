'use client';

import clsx from 'clsx';
import { ChangeEvent, useRef } from 'react';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { useDropdownToggle } from '@/app/hooks/useDropdownToggle';
import { Params } from '@/app/types/Params';
import { useSearchParams } from 'next/navigation';
import { IconArrow } from '@/app/UI/IconArrow';

type Props = {
  filterBy: string;
  options: string[];
  onFilterSelect: (value: string) => void;
  onDeleteFilter: (value: string) => void;
  filters: Params;
};

export default function DropdownList({
  filterBy,
  options,
  onFilterSelect,
  onDeleteFilter,
  filters,
}: Props): JSX.Element {
  const dropdown = useRef<HTMLDivElement>(null);
  const params = useSearchParams();
  const [isOpen, setIsOpen] = useDropdownToggle(dropdown);
  const updateParams = useSetSearchParams();

  function handleFilterSelect(event: ChangeEvent<HTMLInputElement>) {
    const inputElement = event.currentTarget as HTMLInputElement;
    const currentFilter = inputElement.id.toLowerCase();
    onFilterSelect(currentFilter);
    setIsOpen(false);
  }

  function handleFilterClick(event: React.MouseEvent<HTMLInputElement>) {
    const inputElement = event.currentTarget as HTMLInputElement;
    const currentFilter = inputElement.id.toLowerCase();

    if (filters[filterBy] === currentFilter) {
      onDeleteFilter(filterBy);
    }

    updateParams(filterBy, currentFilter);
  }

  function isChecked(option: string): boolean {
    return params.get(filterBy) === option.toLowerCase();
  }

  const isFilterSelected = !!filters[filterBy];

  function handleDropDownTrigger() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <div className="relative inline-block text-left" ref={dropdown}>
        <div>
          <button
            type="button"
            className={clsx(
              `inline-flex w-full justify-center gap-x-1.5 rounded-md bg-foreground px-3 py-2 text-sm font-semibold text-background hover:ring-1 hover:ring-inset hover:ring-lime-600`,
              { 'text-lime-400': isFilterSelected },
            )}
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleDropDownTrigger}
          >
            {filters[filterBy] || filterBy}
            <IconArrow fill={`${isFilterSelected ? '#a3e635' : '#0f2926'}`} />
          </button>
        </div>

        <div
          className={clsx(
            `absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md text-background bg-foreground shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`,
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
                  className="has-[:checked]:text-accent flex justify-between px-4 py-2 text-sm text-background"
                  role="selectitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  {option}

                  <input
                    type="radio"
                    id={option}
                    name="filter"
                    onChange={handleFilterSelect}
                    checked={isChecked(option)}
                    onClick={handleFilterClick}
                    className="appearance-none"
                  ></input>
                </label>
              ))}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
