import { Links } from '@/app/types/Links';
import { NavLink } from '@/app/_components/Menu/NavLink';

type Props = {
  onCloseMenu: () => void;
};

export function MenuLinks({ onCloseMenu }: Props) {
  const links = Object.entries(Links);

  return (
    <>
      {links.map(([pageName, url]) => (
        <li onClick={onCloseMenu} key={pageName}>
          <NavLink href={url}>{pageName}</NavLink>
        </li>
      ))}
    </>
  );
}
