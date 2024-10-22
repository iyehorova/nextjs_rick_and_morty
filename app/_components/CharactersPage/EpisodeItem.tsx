import { getIdFromUrl } from "@/app/utils/getRouteFromUrl";
import Link from "next/link";

type Props = {
  url: string;
};
export function EpisodeItem({ url }: Props) {
  const episodeId = getIdFromUrl(url);

  return (
    <p>
      <Link href={`/${url}`}>episode {episodeId}</Link>
    </p>
  );
}
