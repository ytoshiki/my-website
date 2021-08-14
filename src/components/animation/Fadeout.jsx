import { motion } from 'framer-motion';

const Fadeout = ({ children }) => {
  return (
    <motion.div
      exit={{
        y: -200,
        opacity: 0,
        transition: {
          duration: 0.4
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default Fadeout;
