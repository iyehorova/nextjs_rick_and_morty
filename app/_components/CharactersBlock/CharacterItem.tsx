import Image from 'next/image';
import Link from 'next/link';
import { CharactersBlock } from '@/app/types/CharactersBlock';
import { getIdFromUrl } from '@/app/utils/getRouteFromUrl';

type Props = {
  url: string;
  charactersData: CharactersBlock;
};

export function CharacterItem({ url, charactersData }: Props) {
  const characterId = Number(getIdFromUrl(url));
  const { name, image } = charactersData[characterId];

  return (
    <Link key={url} href={`/${url}`}>
      <Image
        alt={name}
        title={name}
        src={image}
        width={60}
        height={60}
        className="rounded-full"
      />
    </Link>
  );
}
