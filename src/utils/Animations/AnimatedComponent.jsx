import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedComponent = ({ children, duration, delay, y = 100 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedComponent;
