import "./specialtiesBanner.scss"
import React from "react";
import bannerimg from "../../../assets/images/c-1.webp"
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';

export default function SpecialtiesBanner() {
  return (
    <AnimatedComponent duration={1.4} delay={1} className="banner-spec-container">
      <AnimatedComponent duration={1.6} delay={2} x={-500} xExit={-500} className="text-carousel">
        <p className="title-carousel">Especialidades na<br />
          <span className='subtitle'> GCÓR</span></p>
        <p className="paragraph-carousel">
          A GCÓR é uma instituição de saúde dedicada ao cuidado integral, oferecendo uma ampla gama de especialidades médicas para atender às diversas necessidades de seus pacientes. Nossa equipe de profissionais altamente qualificados e especializados se esforça para proporcionar cuidados médicos excepcionais.
        </p>

      </AnimatedComponent>
      <AnimatedComponent duration={1.6} delay={2} x={500} xExit={500} className="image-carousel">  
        <img src={bannerimg} alt="Nossa Especialidades" />
      </AnimatedComponent>


    </AnimatedComponent>
  )
}