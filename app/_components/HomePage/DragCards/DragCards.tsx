'use client';
import { useTooltip } from '@/app/hooks/useTooltip';
import { Tooltip } from '../Tooltip';
import { Cards } from './Cards';

export const DragCards = () => {
  const [showTooltip, handleCloseTooltip, handleDrag] = useTooltip();

  return (
    <main className="relative grid min-h-screen w-full place-content-center overflow-hidden">
      <h2 className="relative z-0 -mt-20 pl-6 text-[20vw] font-black text-background md:mt-7 md:text-[200px]">
        Rick & Morty
      </h2>

      {showTooltip && <Tooltip onClose={handleCloseTooltip} />}

      <Cards onDrag={handleDrag} />
    </main>
  );
};
