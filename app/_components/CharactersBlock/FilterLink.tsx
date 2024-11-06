import Link from 'next/link';
import { Links } from '@/app/types/Links';

type Props = {
  children: React.ReactNode;
  filter: string;
  className: string;
};

export function FilterLink({ children, filter, className }: Props) {
  return (
    <Link
      href={`${Links.Characters}?${filter}=${children}`}
      className={className}
    >
      {children}
    </Link>
  );
}
