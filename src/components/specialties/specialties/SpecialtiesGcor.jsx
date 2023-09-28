import "./specialties.scss"
import React from "react";
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';
import { specialties } from "../../../constants/data";

export default function SpecialtiesGcor(){
    return(
        <AnimatedComponent duration={1.4} delay={2}>
          <p className="specs-title"> Nossas Especialiades</p>

          <div className="specialties-container">
      {specialties.map((specialties, index) => (
        <div key={index} className="item-specialties">
          <div className="image-specialties">
              <img src={specialties.image} alt={specialties.name} />
                </div>
            
                <div className="name-specialties">
                  <p>{specialties.name}</p>
              </div>
                <div className="text-specialties">
            <p>{specialties.description}</p>
              
   
          </div>
        </div>
        
      ))}
</div>


        </AnimatedComponent>
    )
}