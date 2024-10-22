import { Episodes } from "@/app/types/Episode"
import { Links } from "@/app/types/Links";
import Link from "next/link";

type Props = {
  episodes: Episodes;
}

export function EpisodesList({ episodes}: Props) { 
  return (
    <>
      {episodes.results?.map(episode => (
        
        <div key={episode.id} className="">
          <Link href={`${Links.episode}/${episode.id}`}>
            <div>Episode{episode.id}: <span>{episode.name}</span></div>
            <div>Code: <span>{episode.episode}</span></div>
        
            <span>{episode.air_date}</span>
          </Link>
        </div>
      ))}
    </>
  )
}