import Link from 'next/link';
import { motion } from 'framer-motion';
import { getIdFromUrl } from '@/app/utils/getRouteFromUrl';

type Props = {
  url: string;
};
export function EpisodeItem({ url }: Props) {
  const episodeId = getIdFromUrl(url);

  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className='bg-foreground/80 w-8 h-8 rounded-full text-background flex place-items-center place-content-center'
    >
      <Link href={`/${url}`}>{episodeId}</Link>
    </motion.div>
  );
}
