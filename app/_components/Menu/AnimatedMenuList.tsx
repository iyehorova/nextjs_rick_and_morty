import clsx from 'clsx';
import { Links } from '@/app/types/Links';
import { NavLink } from '@/app/_components/Menu/NavLink';
import { useMenuAnimation } from '@/app/hooks/useMenuAnimation';

type Props = {
  isOpen: boolean;
  onCloseMenu: () => void;
};

export function AnimatedMenuList({ isOpen, onCloseMenu }: Props) {
  const links = Object.entries(Links);
  const scope = useMenuAnimation(isOpen);
  return (
    <div ref={scope}>
      <ul
        className={clsx(
          'nav-text fixed left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center gap-10 bg-foreground from-neutral-200 pt-4 font-[family-name:var(--font-roboto-mono)] text-background',
          {
            'md:static md:flex md:h-auto md:w-auto md:flex-row md:bg-none':
              !isOpen,
            block: isOpen,
          },
        )}
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          clipPath: 'inset(0% 0% 150% 0% round 10px)',
          transformOrigin: '0% 0%',
        }}
      >
        {links.map(([pageName, url]) => (
          <li onClick={() => onCloseMenu()} key={pageName}>
            <NavLink href={url}>{pageName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
