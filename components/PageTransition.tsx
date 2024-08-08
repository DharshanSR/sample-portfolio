import { motion } from 'framer-motion';

const pageVariants = {
  initial: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
  enter: { clipPath: 'circle(100% at 50% 50%)', opacity: 1 },
  exit: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
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
