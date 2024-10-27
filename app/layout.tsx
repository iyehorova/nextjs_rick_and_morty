import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import StoreProvider from './StoreProvider';
import { Links } from "./types/Links";
import { NavLink } from "./utils/NavLink";
import clsx from 'clsx';


const robotoMono = localFont({
  src: './fonts/RobotoMono-VariableFont_wght.ttf',
  variable: '--font-roboto-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Rick and Morty app',
  description: 'All about characters, locations and episodes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const backgroundUrl = '/img/bg3.jpg';
  return (
    <StoreProvider>
      <html lang="en">
       <body
        className={clsx(robotoMono.variable,'antialiased')}
        >
          <div
            style={{ background: `rgba(15,41,38,0.90) url(${backgroundUrl})`, backgroundBlendMode: 'darken'}}
            className={`container overflow-hidden min-h-screen`}>
        <nav className='header-border pt-5 pb-16'>
          <ul className="nav-text pt-4 hidden md:flex gap-10 text-background from-neutral-200 justify-center font-[family-name:var(--font-roboto-mono)] ">
            <li><NavLink href={Links.home}>Home</NavLink></li>
            <li><NavLink href={Links.character}>Characters</NavLink></li>
            <li><NavLink href={ Links.episode}>Episodes</NavLink></li>
            <li><NavLink href={ Links.location}>Locations</NavLink></li>
          </ul>
        </nav>
        
        <div className='px-10 font-[family-name:var(--font-roboto-mono)]'>
          {children}
        </div>
          </div>
      </body>
    </html>
    </StoreProvider>
  );
}
