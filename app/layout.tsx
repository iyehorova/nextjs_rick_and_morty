import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import StoreProvider from './StoreProvider';

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
  return (
    <StoreProvider>
      <html lang="en">
        <body className={clsx(robotoMono.variable, 'antialiased')}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
