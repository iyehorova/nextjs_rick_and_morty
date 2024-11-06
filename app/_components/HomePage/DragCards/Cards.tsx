import { useRef } from 'react';
import { Card } from './Card';

type Props = {
  onDrag: () => void;
};

const cardClass = 'w-28 md:w-48 bg-mute/90 rounded-lg';

export function Cards({ onDrag }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute inset-0 z-10 mt-[100px] h-[90vh] w-screen"
      ref={containerRef}
    >
      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        alt="Jerry Smith"
        title="Jerry Smith"
        rotate="6deg"
        top="20%"
        left="15vw"
        className={cardClass}
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/49.jpeg"
        alt="Blamph"
        title="Blamph"
        rotate="12deg"
        top="45%"
        left="50vw"
        className={cardClass}
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/22.jpeg"
        alt="Aqua Rick"
        title="Aqua Rick"
        rotate="-6deg"
        top="20%"
        left="30vw"
        className={cardClass}
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/133.jpeg"
        alt="Garblovian"
        title="Garblovian"
        rotate="8deg"
        top="50%"
        left="30vw"
        className={cardClass}
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/14.jpeg"
        alt="Alien Morty"
        title="Alien Morty"
        rotate="18deg"
        top="20%"
        left="55vw"
        className={cardClass}
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/167.jpeg"
        alt="Izzy"
        title="Izzy"
        rotate="-3deg"
        top="35%"
        left="45vw"
        className={cardClass}
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="https://rickandmortyapi.com/api/character/avatar/74.jpeg"
        alt="Cop Rick"
        title="Cop Rick"
        rotate="-3deg"
        top="45%"
        left="15vw"
        className={cardClass}
        onDrag={onDrag}
      />

      <Card
        containerRef={containerRef}
        src="/img/morty.gif"
        alt="Morty"
        title="Morty"
        rotate="-3deg"
        top="35%"
        left="70vw"
        className="w-28 md:w-48"
        onDrag={onDrag}
      />
    </div>
  );
}
