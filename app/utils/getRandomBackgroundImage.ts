export function getRandomBackgroundImage(): string {
  const backgrounds = [
    '/img/bg-rick.jpg',
    '/img/bg-rick2.jpg',
    '/img/bg-dad.jpg',
    '/img/bg-mom.jpg',
    '/img/bg-summer.jpg',
    '/img/bg-morty.jpg',
  ];

  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}
