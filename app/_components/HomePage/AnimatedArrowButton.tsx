'use client';
import { Links } from '@/app/types/Links';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function AnimatedArrowButton() {
  return (
    <Link className="" href={`${Links.Character}`}>
      <motion.div
        className="fixed bottom-[20%] right-[15%] z-[100] rounded-xl p-[2px] text-xl text-accent"
        style={{
          background:
            'conic-gradient(from 220deg, rgb(15 41 38), rgb(16 118 52), rgb(163 230 53), rgb(15 41 38))',
          clipPath: 'polygon(84% 0, 0 0, 0 100%, 84% 100%, 100% 50%)',
        }}
        whileHover={{ background: 'rgb(163 230 53)' }}
        whileTap={{ transform: 'scale(0.8)' }}
      >
        <div
          className="rounded-xl bg-foreground py-6 pl-4 pr-6 text-xl text-accent"
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
