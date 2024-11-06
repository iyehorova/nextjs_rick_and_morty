import '@/app/globals.css';
import { useEffect } from 'react';
import { useAnimate, stagger } from 'framer-motion';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(0% 0% 150% 0% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.7,
      },
    );

    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );
  }, [isOpen, animate]);

  return scope;
}
