import Link from 'next/link';
import { getIdFromUrl } from '@/app/utils/getRouteFromUrl';

type Props = {
  url: string;
};

export function EpisodeItem({ url }: Props) {
  const episodeId = getIdFromUrl(url);

  return (
    <Link
      className="flex h-8 w-8 place-content-center place-items-center"
      href={`/${url}`}
    >
      {episodeId}
    </Link>
  );
}
