import Image from "next/image";

export function NotFound() { 
  return (
    <div className="grid grid-cols-2 -mt-20 opacity-40 ">
      <p className="text-5xl text-foreground tracking-widest font-[family-name:var(--font-geist-1)]  place-self-center">nothing found here</p>
      <Image
        alt='nothing found'
        src='/img/not-found-rick.png'
        width={300}
        height={480}
        className="justify-self-end"
      />
    </div>
  )
}