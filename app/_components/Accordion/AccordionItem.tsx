import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
}
export function AccordionItem({ children}: Props) { 
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className='bg-foreground/80 rounded-full text-background flex place-items-center place-content-center'
    >
      { children}
    </motion.div>
  )
}