import { usePathname } from 'next/navigation';

export function useGetPageName() {
  const pathname = usePathname();

  if (pathname === '/') return 'Home';

  const pageName = pathname.split('/')[1];

  return pageName[0].toUpperCase() + pageName.slice(1) + 's';
}
