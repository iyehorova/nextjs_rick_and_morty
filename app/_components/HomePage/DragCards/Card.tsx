import { motion } from 'framer-motion';
import { RefObject, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  containerRef: RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  title: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
  onDrag: () => void;
};

export function Card({
  containerRef,
  src,
  alt,
  title,
  top,
  left,
  rotate,
  className,
  onDrag,
}: Props) {
  const [zIndex, setZIndex] = useState(0);

  function updateZIndex() {
    const cards = document.querySelectorAll('.drag-elements');

    let maxZIndex = -Infinity;

    cards.forEach(card => {
      const zIndex = parseInt(
        window.getComputedStyle(card).getPropertyValue('z-index'),
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  }

  return (
    <motion.img
      onMouseDown={updateZIndex}
      onDragStart={onDrag}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        'drag-elements absolute w-28 cursor-grab p-1 active:cursor-grabbing',
        className,
      )}
      src={src}
      alt={alt}
      title={title}
      drag
      dragConstraints={containerRef}
      dragElastic={0.55}
    />
  );
}
