import { fetchData } from "@/app/api/fetchData";
import { BASE_EPISODE_URL } from "@/app/constant";

import { Pagination } from "../Pagination";
import { Episodes } from "@/app/types/Episode";
import { EpisodesList } from "./EpisodesList";

type Props = {
  query: string;
  currentPage: number;
};

export async function EpisodesMain({ query, currentPage }: Props) { 
  const episodes = (await fetchData(BASE_EPISODE_URL, query)) as Episodes;

  if (!episodes.results) {
    return <div className="mt-20 text-center"> No episodes found</div>;
  }

  return (
    <>
      <section className="items-top mt-10 grid min-h-screen grid-cols-4 justify-items-center gap-16 pb-20">
        <EpisodesList episodes={episodes} />
      </section>

      <Pagination
        currentPage={currentPage}
        info={episodes.info}
        itemsCount={episodes.results.length}
      />
    </>
  );
}