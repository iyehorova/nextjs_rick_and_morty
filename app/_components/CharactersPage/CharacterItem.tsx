import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Character, CharacterStatuses } from '@/app/types/Characters';
import { Links } from '@/app/types/Links';
import getBase64 from '@/app/utils/getBase64';

type Props = {
  character: Character;
};

export async function CharacterItem({ character }: Props) {
  const { id, status, image, name, species, gender } = character;
  const blurDataURL = await getBase64(image);

  return (
    <div className="transform-card group w-full hover:z-20 hover:scale-[1.1]">
      <Link
        href={`${Links.Characters}/${id}`}
        className="flex flex-col rounded-lg bg-background p-3"
      >
        <div className="relative mx-auto my-0 h-full">
          <Image
            className="transform-img rounded-full group-hover:skew-x-2 group-hover:skew-y-2"
            src={image}
            alt={name}
            title={`${name}- ${id}`}
            width={300}
            height={300}
            priority
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>

        <div
          className="mt-5 w-[calc(95%)] overflow-hidden text-ellipsis text-nowrap text-2xl"
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          {name}
        </div>

        <div
          className="mt-3 text-justify text-mute/80"
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          <div>
            <span
              className={clsx(
                'mr-3 inline-block h-3 w-3 rounded-full shadow-inner shadow-slate-200',
                { 'bg-foreground': status === CharacterStatuses.alive },
                { 'bg-mute/90': status === CharacterStatuses.dead },
                { 'bg-yellow-400': status === CharacterStatuses.unknown },
              )}
            ></span>

            <span className="text-mute">{status}</span>
          </div>

          <div className="w-[calc(95%)] overflow-hidden text-ellipsis text-nowrap">
            Species: <span className="text-mute">{species}</span>
          </div>

          <div>
            Gender: <span className="text-mute">{gender}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
