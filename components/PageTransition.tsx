// components/PageTransition.tsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    clipPath: 'inset(0 100% 0 0)',
  },
  enter: {
    clipPath: 'inset(0 0% 0 0)',
  },
  exit: {
    clipPath: 'inset(0 0 0 100%)',
  },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.6 }}
    style={{ overflow: 'hidden' }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
