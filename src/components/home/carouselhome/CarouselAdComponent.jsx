import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselAdComponent.scss';
import SliderComponent from '../../../utils/Slider/SliderComponent';
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';




const CarouselAdComponent = () => {
  
  return (
<AnimatedComponent duration={1} delay={.5} className="carouselAdComponent-container">
      <SliderComponent slides={4} arrows= {true} >
            <AnimatedComponent duration={1.4} delay={1} x={200} xExit={200} className="carouselAdComponent-item">
              <h1>teste</h1>
              </AnimatedComponent>
              <AnimatedComponent duration={1.4} delay={1} x={200} xExit={200} className="carouselAdComponent-item">
              <h1>teste</h1>
              </AnimatedComponent>
              <AnimatedComponent duration={1.4} delay={1} x={200} xExit={200} className="carouselAdComponent-item">
              <h1>teste</h1>
              </AnimatedComponent>
              <AnimatedComponent duration={1.4} delay={1} x={200} xExit={200} className="carouselAdComponent-item">
              <h1>teste</h1>
              </AnimatedComponent>
              <AnimatedComponent duration={1.4} delay={1} x={200} xExit={200} className="carouselAdComponent-item">
              <h1>teste</h1>
              </AnimatedComponent>
              <AnimatedComponent duration={1.4} delay={1} x={200} xExit={200} className="carouselAdComponent-item">
              <h1>teste</h1>
              </AnimatedComponent><AnimatedComponent duration={1.4} delay={1} x={200} xExit={200} className="carouselAdComponent-item">
              <h1>teste</h1>
              </AnimatedComponent>

   
      </SliderComponent>
    </AnimatedComponent>
  );
}

export default CarouselAdComponent;