import { Menu } from '../_components/Menu';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const backgroundUrl = '/img/categories-bg.jpg';

  return (
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
  );
}
