import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export function useDropdownToggle(
  dropdown: RefObject<HTMLDivElement>,
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      window.removeEventListener('click', handleClick);
      return;
    }

    function handleClick(event: MouseEvent) {
      const target = event.target as Node;

      if (dropdown.current && !dropdown.current.contains(target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [isOpen, dropdown]);

  return [isOpen, setIsOpen];
}
