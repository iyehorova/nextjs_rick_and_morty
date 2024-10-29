import clsx from 'clsx';
import { useGetPageName } from '@/app/hooks/useGetPageName';
import { AnimatedButton } from './AnimatedButton';
import { AnimatedMenuList } from './AnimatedMenuList';
import Link from 'next/link';
import { useGetUrl } from '@/app/hooks/useGetUrl';

type Props = {
  isOpen: boolean;
  onToggleBurgermenu: (isActive: boolean) => void;
  onCloseMenu: () => void;
};
export function BurgerMenu({ isOpen, onToggleBurgermenu, onCloseMenu }: Props) {
  const pageName = useGetPageName();
  const pageUrl = useGetUrl();
  
  return (
    <div className="absolute left-0 right-0 top-0 z-30 box-border flex flex-col items-end justify-center px-5 pt-5 md:hidden">
      <div
        className={clsx('right-12 top-2', {
          'fixed z-20': isOpen,
          absolute: !isOpen,
        })}
      >
        <AnimatedButton onToggleButton={onToggleBurgermenu} isOpen={isOpen} />
      </div>

      <div className="absolute left-12 top-4 text-2xl text-accent">
        <Link href={pageUrl}>
          {pageName}
          </Link>
      </div>

      <div className="relative -z-0">
        <AnimatedMenuList isOpen={isOpen} onCloseMenu={onCloseMenu} />
      </div>
    </div>
  );
}
