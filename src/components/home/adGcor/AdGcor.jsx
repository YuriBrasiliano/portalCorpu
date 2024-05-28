import React from 'react';
import './AdGcor.scss';
import { assest } from '../../../assets/assests';
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';




const AdGcor = () => {
  
  return (
<AnimatedComponent duration={2} delay={1.6} x={1000} xExit={1000} className="adGcor-container">
      <AnimatedComponent duration={2} delay={1} x={-500} xExit={-500} className="adGcor-image">
      <img src={assest.gifLogo} className='image-banner-home'/>
      </AnimatedComponent>
    </AnimatedComponent>
  );
}

export default AdGcor;