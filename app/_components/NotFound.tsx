import Image from 'next/image';

export function NotFound() {
  return (
    <div className="-mt-20 grid grid-cols-2 opacity-40">
      <p className="place-self-center font-[family-name:var(--font-geist-1)] text-5xl tracking-widest text-foreground">
        nothing found here
      </p>

      <Image
        alt="nothing found"
        src="/img/not-found-rick.png"
        width={300}
        height={480}
        className="justify-self-end"
      />
    </div>
  );
}
