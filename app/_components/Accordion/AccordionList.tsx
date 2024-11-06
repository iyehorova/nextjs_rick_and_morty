import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  isShow: boolean;
  children: React.ReactNode;
};

export function AccordionList({ isShow, children }: Props) {
  return (
    <AnimatePresence initial={false}>
      {isShow && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="flex flex-wrap gap-3"
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
