import "./footer.scss"
import React from "react";
import AnimatedComponent from '../../utils/Animations/AnimatedComponent';
import logo from "../../assets/images/logo.png"
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

export default function Footer(){

    return (
<AnimatedComponent duration={1.2} delay={0.5} x={500} xExit={500} className="footer"> 
      <div className="footer-content">
        <AnimatedComponent duration={1.3} delay={1.2} x={-500} xExit={-500} className="footer-logo">
          <img src={logo} alt="Logo GCOR" />
          </AnimatedComponent>
          <AnimatedComponent duration={1.3} delay={1.2} y={-300} yExit={-300} className="footer-menu">
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/especialistas">Especialistas</a></li>
          </ul>
          
          </AnimatedComponent>
          <AnimatedComponent duration={1.3} delay={1.2} y={-300} yExit={-300} className="footer-menu">
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/especialistas">Especialistas</a></li>
          </ul>
          
          </AnimatedComponent>
          <AnimatedComponent duration={1.3} delay={.7} x={500} xExit={500} className="footer-contact">
          <div className="contact-info">
            <FaPhone className="contact-icon" />
            <p>(11) 1234-5678</p>
          </div>
          <div className="contact-info">
            <FaEnvelope className="contact-icon" />
            <p>contato@gcor.com.br</p>
          </div>
          <div className="contact-info">
            <FaMapMarker className="contact-icon" />
            <p>Alameda Santos, 1000<br /> Cerqueira César<br />São Paulo, SP</p>
          </div>
        </AnimatedComponent>
      </div>

    </AnimatedComponent>
    )
}