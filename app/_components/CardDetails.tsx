type Props = {
  children: React.ReactNode;
}
export function CardDetails({ children }: Props) { 
  return (
    <div className="mx-auto my-6 flex max-w-[480px] text-slate-500 flex-col gap-2 rounded-xl bg-background p-3 sm:p-5 md:p-10">
      { children}
    </div>
  )
}