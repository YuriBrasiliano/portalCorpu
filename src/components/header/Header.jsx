import { assest } from "../../assets/assests";
import "./header.scss"
import React, { useState } from 'react';
import AnimatedComponent from '../../utils/Animations/AnimatedComponent';
import { FaRegUser } from 'react-icons/fa6';
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { constants } from "../../constants/data.js";


export default function Header() {

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (menuItem) => {
    setOpenDropdown(openDropdown === menuItem ? null : menuItem);
  };

  return (
    <>
      <AnimatedComponent duration={1.4} delay={0.5} y={-100} className={"container-header"}>
        <div className="header">
          <Link to="/" className="link-home-logo"><img src={assest.logo} className="logo-header" /> </Link>
      <div className="navbar">
        <ul className="navbar-menu">
          <li className="menu-item">
          <button onClick={() => handleDropdownToggle('atendimento')} className="menu-link">
            Atendimento<br/>na Corpu Clinica 
          <span className={`seta-menu ${openDropdown === 'atendimento' ? 'open' : ''}`}>
           <svg className="seta-menu-icon" data-name="32x32-Guides" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-di-res-id="7ab5bf3d-bf148f8f" data-di-rand="1717349432325">
            <path d="M8 11.414L2.293 5.707 3.707 4.293 8 8.586 12.293 4.293 13.707 5.707 8 11.414z"></path>
            </svg>
           </span>
           <span className="hover-line" />
          </button>
          {openDropdown === 'atendimento' && (
              <ul className="dropdown-menu">
                <li>
                  <Link to={constants.links.apiWhatsApp} className="menu-link">
                    <FaWhatsapp className="whats-icon"/> (11) 9 9385-0895
                    <span className="hover-line" />
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/contact" className="menu-link">
                  <FaPhone className="contact-icon" size={15}/>(11) 3016-2900
                    <span className="hover-line" />
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/contact" className="menu-link">
                  <FaPhone className="contact-icon" size={15}/>(11) 3208-0066
                    <span className="hover-line" />
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
          <button onClick={() => handleDropdownToggle('corpu')} className="menu-link">
            Corpu<br/>Clinica
            <span className={`seta-menu ${openDropdown === 'corpu' ? 'open' : ''}`}>
           <svg className="seta-menu-icon" data-name="32x32-Guides" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-di-res-id="7ab5bf3d-bf148f8f" data-di-rand="1717349432325">
            <path d="M8 11.414L2.293 5.707 3.707 4.293 8 8.586 12.293 4.293 13.707 5.707 8 11.414z"></path>
            </svg>
           </span>
           <span className="hover-line" />
           </button>
           {openDropdown === 'corpu' && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about" className="menu-link">
                    Nossa História
                    <span className="hover-line" />
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/specialties" className="menu-link">
                    Especialidades
                    <span className="hover-line" />
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/contact" className="menu-link">
                    Atendimento Infantil
                    <span className="hover-line" />
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/exams" className="menu-link">
                    Nossos Serviços
                    <span className="hover-line" />
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/contact" className="menu-link">
                    Estacionamento
                    <span className="hover-line" />
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
          <button className="menu-link">
            <Link to='/doctors'>
            Nosso<br/>Corpo Clínico
           <span className="hover-line" />
           </Link>
           </button>
          </li>
          <li className="menu-item">
          <button  className="menu-link">
            <Link to='/insurance'>
           Nossos<br/>Convênios
           <span className="hover-line" />
           </Link>
           </button>
          </li>
        </ul>
        </div>
        </div>
        <div class="navbar-right">
                <Link to='/requestDate' className="menu-link"> <div class="nav-text-agenda">Solicitar Agendamento</div> 
                <span className="hover-line" />
                </Link>
            <div class="button-login">              
            <Link to={constants.links[0]} target="_blank" className="menu-link-login">
              <FaRegUser className="nav-icon-login" />
                <p className="nav-text-login">Login</p>
                <span className="hover-line" />
                </Link>
            </div>
          </div>
      </AnimatedComponent>
    </>
  )
}