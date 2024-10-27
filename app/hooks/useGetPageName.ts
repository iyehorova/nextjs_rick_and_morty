import { usePathname } from "next/navigation";

export function useGetPageName(): string| null {
  const pathname = usePathname();
  if (!pathname) return null
  if (pathname === '/') return 'Home';
  const pageName = pathname.split('/')[1];
  return pageName[0].toUpperCase() + pageName.slice(1);
}