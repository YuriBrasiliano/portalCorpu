import React from 'react';
import './AdGcor.scss';
import image from '../../../assets/images/c-56.webp';
import { Link } from "react-router-dom";
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';




const AdGcor = () => {
  
  return (
<AnimatedComponent duration={2} delay={1.6} x={1000} xExit={1000} className="adGcor-container">
      <AnimatedComponent duration={2} delay={1} x={-500} xExit={-500} className="adGcor-image">
      <img src={image} />
      </AnimatedComponent>
      <AnimatedComponent duration={2} delay={0} x={500} xExit={500} className="adGcor-text">
        <h1>Teste2</h1>
      </AnimatedComponent>
    </AnimatedComponent>
  );
}

export default AdGcor;