import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import StoreProvider from './StoreProvider';
import { Menu } from './_components/Menu/Menu';

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
        <body className={clsx(robotoMono.variable, 'antialiased')}>
          <div
            style={{
              background: `rgba(15,41,38,0.90) url(${backgroundUrl})`,
              backgroundBlendMode: 'darken',
            }}
            className={`container min-h-screen overflow-hidden`}
          >
            <Menu />

            <div className="px-10 font-[family-name:var(--font-roboto-mono)]">
              {children}
            </div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
