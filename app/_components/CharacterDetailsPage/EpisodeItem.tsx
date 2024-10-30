import Link from 'next/link';
import { getIdFromUrl } from '@/app/utils/getRouteFromUrl';

type Props = {
  url: string;
};

export function EpisodeItem({ url }: Props) {
  const episodeId = getIdFromUrl(url);

  return (
    <Link
      className="flex place-content-center place-items-center"
      href={`/${url}`}
    >
      {episodeId}
    </Link>
  );
}
