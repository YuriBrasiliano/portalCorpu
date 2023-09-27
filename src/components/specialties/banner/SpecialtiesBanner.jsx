import "./specialtiesBanner.scss"
import bannerimg from "../../../assets/images/c-1.webp"
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';

export default function SpecialtiesBanner(){
    return(
        <AnimatedComponent duration={1.4} delay={1}>
            <div className="banner-spec-container">
            <div className="text-banner-spec">
              <p className="title-specs">Especialidades na<br />
              <span className='subtitle'> GCÓR</span></p>
              <p className="paragraph-specs">
              A GCÓR é uma instituição de saúde dedicada ao cuidado integral, oferecendo uma ampla gama de especialidades médicas para atender às diversas necessidades de seus pacientes. Nossa equipe de profissionais altamente qualificados e especializados se esforça para proporcionar cuidados médicos excepcionais.
                            </p>

            </div>
            <div className="image-specs">
              <img src={bannerimg} alt="Nossa Especialidades" />
            </div>
          </div>



        </AnimatedComponent>
    )
}