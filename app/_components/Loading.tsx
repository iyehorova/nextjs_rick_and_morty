import Image from 'next/image';

export function Loading() {
  return (
    <div className="flex items-center justify-center">
      <Image alt="...loading" src="/img/loading.gif" width={375} height={480} />
    </div>
  );
}
