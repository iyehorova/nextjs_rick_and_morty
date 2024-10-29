import { AnimatePresence, motion } from 'framer-motion';
import { EpisodeItem } from './EpisodeItem';
type Props = {
  isShow: boolean;
  episodesUrl: string[];
};

export function AccordionList({ isShow, episodesUrl }: Props) {
  return (
    <AnimatePresence initial={false}>
      {isShow && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto'},
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          className='flex gap-3 flex-wrap'
        >
          {episodesUrl.map(url => (
            <EpisodeItem key={url} url={url} />
          ))}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
