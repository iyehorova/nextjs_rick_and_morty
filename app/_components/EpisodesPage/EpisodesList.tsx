import { Episodes } from '@/app/types/Episode';
import { Links } from '@/app/types/Links';
import Link from 'next/link';

type Props = {
  episodes: Episodes;
};

export function EpisodesList({ episodes }: Props) {
  return (
    <div className="justify-items-left grid h-min grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-3">
      {episodes.results?.map(({ id, name, episode, characters }) => (
        <div
          key={id}
          className="break-words rounded-md bg-background p-3 transition-all duration-500 hover:scale-[1.1] hover:text-accent/80"
        >
          <Link href={`${Links.Episodes}/${id}`}>
            <div>
              <span className="text-mute/90">Episode {episode}:</span>{' '}
              <p className="text-3xl">{name}</p>
            </div>

            <p className="text-mute/90">{characters.length} characters</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
