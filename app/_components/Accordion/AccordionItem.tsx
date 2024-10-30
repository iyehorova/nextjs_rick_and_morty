import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {
  className: string;
  children: React.ReactNode;
}
export function AccordionItem({className, children}: Props) { 
  return (
    <motion.div
      variants={{ collapsed: { scale: 0 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className={clsx('bg-foreground/80 rounded-full text-background flex place-items-center place-content-center', className)}
    >
      { children}
    </motion.div>
  )
}