import clsx from "clsx";
import Link from "next/link";
import { Links } from "@/app/types/Links";
import { Locations } from "@/app/types/Location";

type Props = {
  locations: Locations;
}

export function LocationsList({ locations}: Props) { 
  return (
    <>
      {locations.results?.map(({ id, name, dimension, residents}) => (
        
        <div key={id} className={clsx({ 'text-gray-400': residents.length === 0}) }>
          <Link href={`${Links.location}/${id}`}>
            <div>Location{id}: <span>{name}</span></div>
            <div>Dimension: <span>{dimension}</span></div>
          </Link>
        </div>
      ))}
    </>
  )
}