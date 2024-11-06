import { motion } from 'framer-motion';
import IconClear from '@/app/UI/IconClear';

type Props = {
  onClose: () => void;
};

export function Tooltip({ onClose }: Props) {
  return (
    <>
      <motion.div
        className="fixed bottom-10 right-[50%] z-[1000] translate-x-1/2 rounded-xl bg-orange-600/50 p-3 text-white"
        style={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: 'linear',
          repeat: 3,
          repeatType: 'reverse',
        }}
      >
        <span>Drag the picture!</span>{' '}
        <button onClick={onClose}>
          <IconClear fill="#a3e635" width="12" height="12" />
        </button>
      </motion.div>
    </>
  );
}
