import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedComponent = ({ children, duration, delay, y, x , yExit, xExit, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const variants = {
    hidden: { opacity: 0, y, x },
    visible: { opacity: 1, y: 0, x: 0},
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        exit={{transition:{duration: .5}, opacity: 0, y: yExit, x: xExit}}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedComponent;
