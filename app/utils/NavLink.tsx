'use client';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export const NavLink = ({
  children,
  ...rest
}: { children: React.ReactNode } & LinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === rest.href;

  return (
    <Link
      {...rest}
      className={clsx({
        'text-accent font-semibold drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]':
          isActive,
      })}
    >
      {children}
    </Link>
  );
};
