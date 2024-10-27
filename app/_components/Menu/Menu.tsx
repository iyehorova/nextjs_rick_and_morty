'use client';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { Links } from '@/app/types/Links';
import { NavLink } from '@/app/utils/NavLink';
import { useGetPageName } from '../../hooks/useGetPageName';
import { AnimatedButton } from './AnimatedButton';
import { AnimatedMenuList } from './AnimatedMenuList';
import { MenuLinks } from './MenuLinks';
import { BurgerMenu } from './BurgerMenu';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleToggleBurgerMenu(isActive: boolean) {
    setIsOpen(isActive);
  }
  function handleCloseMenu() {
    setIsOpen(false);
  }
  return (
    <nav className="header-border box-border px-5 pb-24 pt-5 md:block md:pb-16">
      <BurgerMenu
        isOpen={isOpen}
        onToggleBurgermenu={handleToggleBurgerMenu}
        onCloseMenu={handleCloseMenu}
      />
      <ul className="nav-text hidden items-center justify-center gap-10 pt-4 font-[family-name:var(--font-roboto-mono)] text-background md:flex">
        <MenuLinks onCloseMenu={handleCloseMenu} />
      </ul>
    </nav>
  );
}
