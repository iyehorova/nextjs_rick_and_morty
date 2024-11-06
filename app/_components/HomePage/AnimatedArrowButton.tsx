'use client';
import { Links } from '@/app/types/Links';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function AnimatedArrowButton() {
  return (
    <Link className="" href={`${Links.Characters}`}>
      <motion.div
        className="home-button fixed bottom-[20%] right-[50%] z-[100] translate-x-1/2 scale-[1] rounded-xl p-[2px] text-xl text-accent md:right-[15%] md:translate-x-0"
        whileHover={{
          background:
            'conic-gradient(from 10deg, rgb(var(--background)), rgb(var(--foreground)), rgb(var(--accent)), rgb(var(--background)))',
        }}
        whileTap={{ transform: 'scale(0.1)' }}
        transition={{
          duration: 0.5,
          ease: 'linear',
        }}
      >
        <div
          className="flex place-content-center place-items-center rounded-xl bg-foreground p-3 pr-5 text-xl text-accent"
          style={{
            clipPath: 'polygon(84% 0, 0 0, 0 100%, 84% 100%, 100% 50%)',
          }}
        >
          Explore characters
        </div>
      </motion.div>
    </Link>
  );
}
