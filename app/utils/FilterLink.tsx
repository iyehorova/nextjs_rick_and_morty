import Link from "next/link";
import { Links } from "../types/Links";
type Props = {
  children: React.ReactNode;
  filter: string;
}
export function FilterLink({ children, filter}: Props) { 
  return (
    <Link href={`${Links.Character}?${filter}=${children}`}>{children}</Link>
  )
}