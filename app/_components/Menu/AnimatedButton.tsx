import { motion, MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  onToggleButton: (isActive: boolean) => void;
  isOpen: boolean;
};

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['65%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '65%'],
    },
  },
};

export function AnimatedButton({ onToggleButton, isOpen }: Props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsActive(false);
    }
  }, [isOpen]);

  function handleToggleAction() {
    setIsActive(prev => !prev);
    onToggleButton(!isActive);
  }

  return (
    <MotionConfig
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        className="group relative h-10 w-10 rounded-full"
        initial={false}
        animate={isActive ? 'open' : 'closed'}
        onClick={handleToggleAction}
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[3px] w-5 -translate-x-2/4 -translate-y-2/4 bg-background transition group-hover:bg-accent"
          style={{
            left: '50%',
            top: '35%',
          }}
        ></motion.span>

        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[3px] w-5 -translate-x-2/4 -translate-y-2/4 bg-background transition group-hover:bg-accent"
          style={{
            left: '50%',
            top: '50%',
          }}
        ></motion.span>
        
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[3px] w-5 -translate-x-2/4 -translate-y-2/4 bg-background transition group-hover:bg-accent"
          style={{
            left: '50%',
            top: '65%',
          }}
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
}
