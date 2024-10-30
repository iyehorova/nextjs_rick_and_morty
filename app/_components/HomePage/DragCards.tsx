'use client';
import { useRef, useState, RefObject } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from './Tooltip';

export const DragCards = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  const handleDrag = () => {
    setShowTooltip(false);
  };

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

type CardProps = {
  onDrag: () => void;
}

const Cards = ({ onDrag}: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute top-[100px] md:0 h-[80%] md:h-screen inset-0 z-10 w-[80%]" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        alt="Jerry Smith"
        title="Jerry Smith"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/49.jpeg"
        alt="Blamph"
        title="Blamph"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/22.jpeg"
        alt="Aqua Rick"
        title="Aqua Rick"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/133.jpeg"
        alt="Garblovian"
        title="Garblovian"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/14.jpeg"
        alt="Alien Morty"
        title="Alien Morty"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/167.jpeg"
        alt="Izzy"
        title="Izzy"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/74.jpeg"
        alt="Cop Rick"
        title="Cop Rick"
        rotate="-3deg"
        top="45%"
        left="25%"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="/img/morty.gif"
        alt="Morty"
        title="Morty"
        rotate="-3deg"
        top="35%"
        left="80%"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />
    </div>
  );
};

type Props = {
  containerRef: RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  title: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
  onDrag:() => void
};

const Card = ({
  containerRef,
  src,
  alt,
  title,
  top,
  left,
  rotate,
  className,
  onDrag,
}: Props) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
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
  };

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
      className={twMerge('drag-elements absolute w-28 p-1 pb-4 cursor-grab active:cursor-grabbing', className)}
      src={src}
      alt={alt}
      title={title}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};
