import { Episodes } from "@/app/types/Episode"
import { Links } from "@/app/types/Links";
import Link from "next/link";

type Props = {
  episodes: Episodes;
}

export function EpisodesList({ episodes}: Props) { 
  return (
    <>
      {episodes.results?.map(({id, name, episode, air_date, characters }) => (
        
        <div key={id} className="">
          <Link href={`${Links.Episode}/${id}`}>
            <div>Episode{id}: <span>{name}</span></div>
            <div>Code: <span>{episode}</span></div>
        
            <p>Air date: {air_date}</p>
            <p>{characters.length} characters</p>
          </Link>
        </div>
      ))}
    </>
  )
}