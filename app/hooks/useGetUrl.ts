import { usePathname } from 'next/navigation';

export function useGetUrl() {
  const pathname = usePathname();

  if (pathname === '/') return '/';

  const pageName = pathname.split('/')[1];
  return `/${pageName}`;
}
