import "./testimonials.scss";
import { Carousel } from "react-responsive-carousel";
import AnimatedComponent from "../../utils/AnimatedComponent";
import { testimonials } from "../../constants/data";

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
    <AnimatedComponent duration={1.4} delay={1}>
      <div className="titleTestimonials">Nossos Pacientes</div>

      <Carousel
      className="testimonials-carousel"
        showStatus={false}
        showArrows={false} // Habilitar as setas de navegação
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        transitionTime={2000}
        stopOnHover={false}
        showThumbs={false} // Desativar as miniaturas
        emulateTouch={false}
        selectedItem={0}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={25} // Definir a largura de cada slide visível
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="carousel-item-testimonial">
            <div className="text-testimonial">
              
            <p className="testimonial-testimonial">{testimonial.testimonial}</p>
              <div className="title-image-container">
    <div>
      <div className="title-testimonial">
        <p>{testimonial.name}</p>
      </div>
      <div className="testimonial-medico"><strong>Dr(a).</strong> {testimonial.doctor}</div> {/* Adicionado aqui */}
    </div>
    <div className="image-testimonial">
      <img src={testimonial.image} alt={testimonial.name} />
    </div>
  </div>
</div>
</div>
          
          
        ))}
      </Carousel>
      
    </AnimatedComponent>
    </div>
  );
}
