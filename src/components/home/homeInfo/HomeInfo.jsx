import React from 'react';
import './HomeInfo.scss';
import { assest } from '../../../assets/assests'
import { constants } from '../../../constants/data';
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';




export default function HomeInfo() {
  
  return (
    <div className = "HomeInfo-container">
<AnimatedComponent duration={1} delay={.6} y={100} yExit={100} className="HomeInfo-container1">
      <img src={assest.image1} className='image-HomeInfo1'/>
      <div className='HomeInfo-info1'>
      <p className='title1HomeInfo'>{constants.texts[0].title1HomeInfo}</p>
      <p className='text1HomeInfo'>{constants.texts[0].text1HomeInfo}</p>
      </div>
    </AnimatedComponent>

    <AnimatedComponent duration={1} delay={.6} y={100} yExit={100} className="HomeInfo-container2">
    <img src={assest.image2} className='image-HomeInfo2'/>
    <div className='HomeInfo-info2'>
    <p className='title2HomeInfo'>{constants.texts[0].title2HomeInfo}</p>
    <p className='text2HomeInfo'>{constants.texts[0].text2HomeInfo}</p>
    </div>
    </AnimatedComponent>
    </div>
  );
}