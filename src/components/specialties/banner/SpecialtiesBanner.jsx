import "./specialtiesBanner.scss"
import bannerimg from "../../../assets/images/c-1.webp"
import AnimatedComponent from '../../../utils/AnimatedComponent';

export default function SpecialtiesBanner(){
    return(
        <AnimatedComponent duration={1.4} delay={1}>
            <div className="banner-spec-container">
            <div className="text-banner-spec">
              <p className="title">Especialidades na<br />
              <span className='subtitle'> GCÓR</span></p>
              <p className="paragraph-specialties">
              Temos várias especialidades médicas para atender todas as suas necessidades
              </p>

            </div>
            <div className="image-banner-spec">
              <img src={bannerimg} alt="Nossa Especialidades" />
            </div>
          </div>



        </AnimatedComponent>
    )
}