import { assest } from "../../assets/assests";
import AnimatedComponent from "../../utils/Animations/AnimatedComponent";
import "./RequestDateForm.scss"
import React, { useState } from 'react';
import { Link } from "react-router-dom";



export default function RequestDateForm() {

  return (
    <>
        <AnimatedComponent duration={1} y={-500} className='request-container'>
            <Link to='/' className="header-request">
                <img src={assest.logo} alt="Logo GCOR" className="logo-request" />
            </Link>
            <div className="request">
                <div className="left-request">
                    <span className="title-request">
                Solicite seu agendamento aqui
                    </span>
                    <br />
                    <span className="text-request">
                Esse é o jeito mais fácil de nos alcançar
                    </span>
                </div>
            <div className="right-request">
            <ul className="options-request">
                <li className="option-request">
                <Link to='/contact' className="option-link">
                    <p className="title-link-request">
                    Novo Paciente ?
                    </p>
                    <p className="text-link-request">
                    Nos forneça seus dados e marque uma consulta 
                    </p>
                    <span className="hover-line" />
                  </Link>
                </li>
                <hr />
                <li className="option-request">
                <Link to='/contact' className="option-link">
                    <p className="title-link-request">
                    Já é Paciente ?
                    </p>
                    <p className="text-link-request">
                    Marque uma consulta usando sua conta
                    </p>
                    <span className="hover-line" />
                  </Link>
                </li>
                </ul>
            </div>

            </div>
        </ AnimatedComponent>
        </>
  )
}