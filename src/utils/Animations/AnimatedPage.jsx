import React, { Component } from 'react';
import { motion } from 'framer-motion';

class AnimatedPage extends Component{
  render(){ 
  return (
    <motion.div className="App"
    exit={{transition:{duration: .7}, opacity: 0, y: 500}}>
    {this.props.children}
  </motion.div>
  );
}
}

export default AnimatedPage;
