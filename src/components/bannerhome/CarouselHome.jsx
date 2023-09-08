import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importe os estilos do carrossel
import './carouselhome.scss'; // Crie um arquivo SCSS para estilizar o carrossel
import { Link } from "react-router-dom";
import data from "./data";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const CarouselComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento ficar visível
    threshold: 1, // Altere este valor conforme necessário para definir quando a animação deve começar
  });

  const variants = {
    hidden: { opacity: 0, y: 30 }, // Estado inicial (invisível)
    visible: { opacity: 1, y: 0 }, // Estado final (visível)
  };

  const [currentImage, setCurrentImage] = useState(0);


  return (
    <div ref={ref}>
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1, delay: 1 }}
    >
    <div className="carousel-container">
      <Carousel showStatus={false} showArrows={false} autoPlay={true} interval={5000} infiniteLoop={true} transitionTime={2000} stopOnHover={false}>
        {data.map((data, index) => (
          <div key={index} className="carousel-item">
            <div className="text">
              <p className="title">{data.title}<p className='subtitle'>{data.titlespan}</p></p>
              <div className="paragraph">
                <p>{data.p1}</p>
                <p>{data.p2}</p>
                <p>{data.p3}</p>
                <button className="buttoncarousel">
                  <Link to={data.link} className='linkbutton'>{data.buttonName}</Link>
                </button>
              </div>
            </div>
            <div className="image">
              <img src={data.src} alt={data.alt} />
            </div>
          </div>

        ))}
      </Carousel>
    </div>
    </motion.div>
    </div>
  );
}

export default CarouselComponent;