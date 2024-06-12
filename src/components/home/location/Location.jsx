import React from 'react';
import './Location.scss';
import { assest } from '../../../assets/assests';
import { FaMapMarker } from 'react-icons/fa';
import { constants } from '../../../constants/data';
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';




const Location = () => {
  
  return (
<AnimatedComponent duration={2} delay={1} x={-500} className="location-container">
    <div>
        <span className='location-title'>
        {constants.texts[1].location}
            </span>
            <div className="location-info">
            <FaMapMarker className="location-icon" />
            <p>Alameda Santos, 1000<br /> Cerqueira César<br />São Paulo, SP</p>
          </div>
            </div>
            <div className='location-image'>
                <img src={assest.paris} />
            </div>
    <div className='mapaCorpu' >
        <iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Alameda%20Santos,%201000%20Sao%20Paulo+(Corpu%20Clinica)&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
        </div>
    </AnimatedComponent>
  );
}

export default Location;