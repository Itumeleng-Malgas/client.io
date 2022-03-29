import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'umi';
import React from 'react';

const RouterAnimation: React.FC = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={useLocation().pathname}
        initial={{
          opacity: 0,
          y: -5,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RouterAnimation;
//framer-motion@4.1.17
