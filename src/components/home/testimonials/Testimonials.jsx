import "./testimonials.scss";
import AnimatedComponent from "../../../utils/Animations/AnimatedComponent";
import { testimonials } from "../../../constants/data";
import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from '../../../utils/Slider/SliderComponent';

export default function Testimonials() {
  /*
  function renderRatingStars(rating) {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<span key={i} className="star-icon">&#9733;</span>);
    }
    return stars;
  }

  <div className="rating">{renderRatingStars(testimonial.rating)}</div>
    */

  return (
    <div className="sectionTestimonials">
    <AnimatedComponent duration={1.3} delay={.5} x={-500} xExit={-500} className="titleTestimonials">
      Nossos Pacientes
      </AnimatedComponent>
    <SliderComponent slides={4}>
      {testimonials.map((testimonial, index) => (
        <AnimatedComponent duration={1.5} x={300} xExit={300} className="carousel-item-testimonial">
        <div key={index}>
          <div className="image-testimonial">
              <img src={testimonial.image} alt={testimonial.name} />
                </div>
            
                <div className="name-testimonial">
                  <p>{testimonial.name}</p>                
                <div className="testimonial-medico">
                 Dr(a). {testimonial.doctor}
                </div>
              </div>
                <div className="text-testimonial">
            <p className="testimonial-testimonial">{testimonial.testimonial}</p>
              
   
          </div>
        </div>
        </AnimatedComponent>
      ))}      
    
    </SliderComponent>
    </div>
  );
}
