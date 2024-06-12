import "./specialties.scss"
import React from "react";
import AnimatedComponent from '../../../utils/Animations/AnimatedComponent';
import { constants } from "../../../constants/data";

export default function SpecialtiesGcor(){
    return(
        <AnimatedComponent duration={1.4} delay={2}>
          <p className="specs-title"> Nossas Especialiades</p>

          <div className="specialties-container">
      {constants.specialties.map((specialties, index) => (
        <div key={index} className="item-specialties">
          <div className="image-specialties">
              <img src={constants.specialties.image} alt={constants.specialties.name} />
                </div>
            
                <div className="name-specialties">
                  <p>{constants.specialties.name}</p>
              </div>
                <div className="text-specialties">
            <p>{constants.specialties.description}</p>
              
   
          </div>
        </div>
        
      ))}
</div>


        </AnimatedComponent>
    )
}