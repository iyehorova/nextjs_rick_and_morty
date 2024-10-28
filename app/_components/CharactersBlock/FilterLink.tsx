import Link from "next/link";
import { Links } from "@/app/types/Links";
type Props = {
  children: React.ReactNode;
  filter: string;
}
export function FilterLink({ children, filter}: Props) { 
  return (
    <Link href={`${Links.Characters}?${filter}=${children}`}>{children}</Link>
  )
}