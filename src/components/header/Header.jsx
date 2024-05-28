import { assest } from "../../assets/assests";
import "./header.scss"
import React from 'react';
import AnimatedComponent from '../../utils/Animations/AnimatedComponent';
import { FaRegUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { links } from "../../constants/data";


export default function Header() {

  return (
    <>
      <AnimatedComponent duration={1.4} delay={0.5} y={-100} className={"container-header"}>
          <Link to="/" className="link-home-logo"><img src={assest.logo} className="logo-header" /> </Link>
      <div className="navbar">
        <ul className="navbar-menu">
          <li>
          Atendimento<br/>na Corpu Clinica
          </li>
          <li >
            Corpu<br/>Clinica
          </li>
          <li >
            Nosso<br/>Corpo Clínico
          </li>
          <li >
           Nossos<br/>Convênios
          </li>
        </ul>
        </div>
        <div class="navbar-right">
                <Link to={links.apiWhatsApp} target="_blank"> <div class="nav-text-agenda">Solicitar Agendamento</div> </Link>
            <div class="button-login">              
            <Link to={links.apiWhatsApp} target="_blank">
              <FaRegUser className="nav-icon-login" />
              </Link>
              <Link to={links.apiWhatsApp} target="_blank">
                <p className="nav-text-login">Login</p>
                </Link>
            </div>
          </div>
      </AnimatedComponent>
    </>
  )
}