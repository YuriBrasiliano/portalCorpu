import "./testimonials.scss";
import AnimatedComponent from "../../../utils/AnimatedComponent";
import { testimonials } from "../../../constants/data";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Quantidade de slides visíveis ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000, // Tempo de rotação de cada slide em milissegundos
  };

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
    <AnimatedComponent duration={1.4} delay={1}>
      <div className="titleTestimonials">Nossos Pacientes</div>

    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="carousel-item-testimonial">
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
      ))}
    </Slider>

      
    </AnimatedComponent>
    </div>
  );
}
