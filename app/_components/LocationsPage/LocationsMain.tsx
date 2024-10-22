import { fetchData } from "@/app/api/fetchData";
import {  BASE_LOCATION_URL } from "@/app/constant";

import { Pagination } from "../Pagination";
import { Locations } from "@/app/types/Location";
import { LocationsList } from "./LocationsList";

type Props = {
  query: string;
  currentPage: number;
};

export async function LocationsMain({ query, currentPage }: Props) { 
  const locations = (await fetchData(BASE_LOCATION_URL, query)) as Locations;

  if (!locations.results) {
    return <div className="mt-20 text-center"> No locations found</div>;
  }

  return (
    <>
      <section className="items-top mt-10 grid min-h-screen grid-cols-1 justify-items-left gap-5 pb-20">
        <LocationsList locations={locations} />
      </section>

      <Pagination
        currentPage={currentPage}
        info={locations.info}
        itemsCount={locations.results.length}
      />
    </>
  );
}