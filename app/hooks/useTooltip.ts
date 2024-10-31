import { useState, useEffect } from 'react';
import { LocalStorage } from '../types/LocalStorage';

type ShowTooltip = boolean;
type HandleCloseTooltip = () => void;
type HandleDrag = () => void;

export function useTooltip(): [ShowTooltip, HandleCloseTooltip, HandleDrag] {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const savedTooltip = localStorage.getItem(LocalStorage.tooltip);

    if (savedTooltip === 'already') {
      setShowTooltip(false);
    } else {
      setShowTooltip(true);
    }
  }, []);

  const handleCloseTooltip = () => {
    setShowTooltip(false);
    localStorage.setItem(LocalStorage.tooltip, 'already');
  };

  const handleDrag = () => {
    setShowTooltip(false);
    localStorage.setItem(LocalStorage.tooltip, 'already');
  };

  return [showTooltip, handleCloseTooltip, handleDrag];
}
