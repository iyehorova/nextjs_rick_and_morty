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
        href={`${Links.character}/${id}`}
        className="flex flex-col rounded-lg bg-background p-3"
      >
        <div className="relative h-full my-0 mx-auto">
          <Image
            className="transform-img rounded-full group-hover:rounded-lg dark:invert"
            src={image}
            alt={name}
            title={name}
            width={300}
            height={300}
            priority
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        <div className="text-2xl mt-5 overflow-hidden text-nowrap w-[calc(95%)] text-ellipsis">{name}</div>
        
        <div className="text-slate-600 mt-3 text-justify">
          <div><span
          className={clsx(
            'mr-3 w-3 h-3 inline-block rounded-full shadow-inner shadow-slate-200',
            { 'bg-foreground': status === CharacterStatuses.alive},
            { 'bg-slate-500': status === CharacterStatuses.dead },
            { 'bg-yellow-400': status === CharacterStatuses.unknown },
          )}
        ></span><span className='text-slate-400'>{ status}</span></div>
            <div className='overflow-hidden text-nowrap w-[calc(95%)] text-ellipsis'>Species: <span className='text-slate-400'>{species}</span></div>
            <div>Gender: <span className='text-slate-400'>{gender}</span></div>
          </div>
        </Link>
    </div>
  );
}
