import React from 'react';
import './AdGcor.scss';
import { assest } from '../../../assets/assests';
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';




const AdGcor = () => {
  
  return (
<AnimatedComponent duration={2} delay={.3} y={500}  className="adGcor-container">
      <img src={assest.gifLogo} className='image-banner-home'/>
    </AnimatedComponent>
  );
}

export default AdGcor;