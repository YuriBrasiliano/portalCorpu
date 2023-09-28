import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carouselhome.scss';
import { Link } from "react-router-dom";
import CarouselHomeData from "../../../constants/data.js";
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';




const CarouselComponent = () => {
  
  return (
<AnimatedComponent duration={1.4} delay={1.5} className="carousel-container">
      <Carousel showStatus={false} showIndicators={false} showThumbs={false} showArrows={false} autoPlay={true} interval={8000} infiniteLoop={true} transitionTime={1500} stopOnHover={false}>
        {CarouselHomeData.map((CarouselHomeData, index) => (
          <div key={index} className="carousel-item">
            <AnimatedComponent duration={1.4} delay={1} x={-200} className="text" xExit={200}>
              <p className="title">{CarouselHomeData.title}<span className='subtitle'>{CarouselHomeData.titlespan}</span></p>
              <div className="paragraph">
                <p>{CarouselHomeData.p1}</p>
                <p>{CarouselHomeData.p2}</p>
                <p>{CarouselHomeData.p3}</p>
                <button className="buttoncarousel">
                  <Link to={CarouselHomeData.link} className='linkbutton'>{CarouselHomeData.buttonName}</Link>
                </button>
              </div>
              </AnimatedComponent>
              <AnimatedComponent duration={1.4} delay={1} x={200} className={"image"} xExit={-200}>
              <img src={CarouselHomeData.src} alt={CarouselHomeData.alt} />
              </AnimatedComponent>
          </div>

        ))}
      </Carousel>
    </AnimatedComponent>
  );
}

export default CarouselComponent;