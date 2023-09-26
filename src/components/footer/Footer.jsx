import "./footer.scss"
import AnimatedComponent from '../../utils/AnimatedComponent';
import logo from "../../assets/images/logo.png"
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

export default function Footer(){

    return (
<AnimatedComponent duration={0.8} delay={0.5} y={0}> 
    <footer className="footer">
      <div className="footer-content">
          <img src={logo} alt="Logo GCOR" className="footer-logo" />
          <div className="footer-menu">
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/especialistas">Especialistas</a></li>
          </ul>
          
        </div>
        <div className="footer-menu">
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/especialistas">Especialistas</a></li>
          </ul>
          
        </div>
        <div className="footer-contact">
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
            <p>Rua Cardiologista, 1234<br />São Paulo, SP</p>
          </div>
        </div>
      </div>

    </footer>

    </AnimatedComponent>
    )
}