import { FilterCharacters } from "@/app/types/FilterBy";
import Image from "next/image";
import Link from "next/link";
import { FilterLink } from "../CharactersBlock/FilterLink";
import { EpisodesList } from "../CharactersPage/EpisodesList";
import { Character } from "@/app/types/Characters";
import { getRouteFromUrl } from "@/app/utils/getRouteFromUrl";

type Props = {
  serverData: Character;
}
export function CharactersDetails({ serverData}: Props) { 
  const { name, status, species, gender, image, location, episode } = serverData;
  const locationUrl = getRouteFromUrl(location.url);
  return (
    <div className="bg-background rounded-xl p-3 mt-6 flex flex-col gap-2"
    
    >
      <Image alt={name} src={image} width={450} height={450}
        // style={{clipPath: 'polygon(0.4% 0.3%, 100% 0%, 95% 85.8%, 20.1% 74%, 10.4% 100%, 14.1% 78.8%, 4.8% 77%)'}}
        style={{clipPath: 'polygon(100% 0, 100% 100%, 96% 94%, 81% 98%, 76% 95%, 63% 95%, 58% 99%,47% 99%, 30% 96%, 20% 90%, 7% 98%, 0 91%, 0 1%)'}}
      />
      <p>Name: <span className="text-4xl text-accent/50">{name}</span></p>
      <p>
        Status:{' '}
        <FilterLink filter={FilterCharacters.status}>{status}</FilterLink>
      </p>
      <p>
        Species:{' '}
        <FilterLink filter={FilterCharacters.species}>{species}</FilterLink>
      </p>
      <p>
        Gender:{' '}
        <FilterLink filter={FilterCharacters.gender}>{gender}</FilterLink>
      </p>
      <p>
        Location: {location.name}{' '}
        <Link href={`/${locationUrl}`}>Show location</Link>
      </p>

      <EpisodesList episodes={episode} />
    </div>
  )
}