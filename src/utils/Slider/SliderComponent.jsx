import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import "./SliderComponent.scss"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SliderComponent = ({ children, slides, arrows, speed = 1000, autoplaySpeed = 3000 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrow next-arrow">
       <FaChevronRight />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrow prev-arrow">
      <FaChevronLeft />
    </div>
  );


  const SliderSettings = {
    arrows: arrows,
    nextArrow: <CustomNextArrow />, // Componente de seta personalizada para avançar
    prevArrow: <CustomPrevArrow />, 
    dots: false,
    infinite: true,
    speed: speed,
    slidesToShow: slides, // Quantidade de slides visíveis ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: autoplaySpeed, // Tempo de rotação de cada slide em milissegundos
    responsive: [
      {
        breakpoint: 1024, // Tamanho da tela em que a configuração será aplicada
        settings: {
          slidesToShow: 3, // Número de slides a serem mostrados em telas menores
        },
      },
      {
        breakpoint: 768, // Tamanho da tela em que a configuração será aplicada
        settings: {
          slidesToShow: 2, // Número de slides a serem mostrados em telas menores
        },
      },
      {
        breakpoint: 520, // Tamanho da tela em que a configuração será aplicada
        settings: {
          slidesToShow: 1, // Número de slides a serem mostrados em telas ainda menores
        },
      },
    ],
  };


  return (
    <div ref={ref}> 
        <Slider {...SliderSettings} >
        {children}
        </Slider>
    </div>
  );


};


export default SliderComponent;

