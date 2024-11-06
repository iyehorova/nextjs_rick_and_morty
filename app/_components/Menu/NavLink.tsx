'use client';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { useGetUrl } from '@/app/hooks/useGetUrl';

export const NavLink = ({
  children,
  ...rest
}: { children: React.ReactNode } & LinkProps) => {
  const pageUrl = useGetUrl();
  const isActive = pageUrl === rest.href;

  return (
    <Link
      {...rest}
      className={clsx({
        'font-semibold text-accent drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]':
          isActive,
      })}
    >
      {children}
    </Link>
  );
};
