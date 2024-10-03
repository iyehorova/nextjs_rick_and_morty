'use client'
import Link, { LinkProps } from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';


export const NavLink = ({ children, ...rest }: { children: React.ReactNode } & LinkProps) => {
  const activeSegment = useSelectedLayoutSegment();
  const isActive = rest.href === '/'? activeSegment === null : activeSegment === rest.href;

  return (
    <Link {...rest} className={clsx({'text-primary font-semibold underline underline-offset-8 text-blue-500': isActive})}>{ children}</Link>
   )
}