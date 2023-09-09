import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importe os estilos do carrossel
import './carouselhome.scss'; // Crie um arquivo SCSS para estilizar o carrossel
import { Link } from "react-router-dom";
import CarouselHomeData from "../../constants/data";
import AnimatedComponent from '../../utils/AnimatedComponent';




const CarouselComponent = () => {
  return (
<AnimatedComponent duration={1.4} delay={1.5}>
    <div className="carousel-container">
      <Carousel showStatus={false} showArrows={false} autoPlay={true} interval={5000} infiniteLoop={true} transitionTime={2000} stopOnHover={false}>
        {CarouselHomeData.map((CarouselHomeData, index) => (
          <div key={index} className="carousel-item">
            <div className="text">
              <p className="title">{CarouselHomeData.title}<p className='subtitle'>{CarouselHomeData.titlespan}</p></p>
              <div className="paragraph">
                <p>{CarouselHomeData.p1}</p>
                <p>{CarouselHomeData.p2}</p>
                <p>{CarouselHomeData.p3}</p>
                <button className="buttoncarousel">
                  <Link to={CarouselHomeData.link} className='linkbutton'>{CarouselHomeData.buttonName}</Link>
                </button>
              </div>
            </div>
            <div className="image">
              <img src={CarouselHomeData.src} alt={CarouselHomeData.alt} />
            </div>
          </div>

        ))}
      </Carousel>
    </div>
    </AnimatedComponent>
  );
}

export default CarouselComponent;