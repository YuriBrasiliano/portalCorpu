import logo from "../../assets/images/logo.png";
import "./header.scss"
import React from 'react'; 
import AnimatedComponent from '../../utils/AnimatedComponent';
import {FaUserDoctor} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Header(){



      const [navigationMenu, setNavigationMenu] = useState(null);
      const [titlenavbar, settitlenavbar] = useState(null);

      useEffect(() => {
        settitlenavbar(document.querySelector('.titlenavbar'));
        setNavigationMenu(document.querySelector('.nav ul'));
      }, []);

  

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const isActivePage = (page) => {
    return currentPath === page ? 'selected' : '';
  };

  
    return(
      <AnimatedComponent duration={1.4} delay={0.5}>
        <div className="container-header">
        <Link to= "/"><img src={logo} className="logo-header" /> </Link>

        <Link to="https://resultados.alcordiagnosticos.com.br/web_laudos/login.asp" target="_blank">
<div class="button-container-portal">
        <div class="button-portal">
  <button class="hover-button-portal"><FaUserDoctor className="button-icon-portal"/></button>
  <div class="text-portal">Acessar Portal GCÓR</div>
</div>

        </div>
     
        </Link>
        
        </div>
        <nav className="nav">
          <div className="menu-toggle" onClick={() => {
        navigationMenu.classList.toggle('active'); 
        titlenavbar.style.display = 'none';    
      }}>
            <div className="titlenavbar">Menu</div>
            <br />
          </div>
            <ul className="nav-list">
                <li className={isActivePage('/')}> 
                    <Link to="/">Home</Link>
                </li>
                <li className={isActivePage('/specialties')}> 
                <Link to="/specialties">Especialiades</Link>
                </li>
                <li className={isActivePage('/exams')}> 
                    <Link to="/exams">Exames</Link>
                </li>
                <li className={isActivePage('/insurance')}> 
                    <Link to="/insurance">Convênios</Link>
                </li>
                <li className={isActivePage('/doctors')}> 
                    <Link to="/doctors">Corpo Clínico</Link>
                </li>
                <li className={isActivePage('/about')}> 
                    <Link to="/about">Sobre a GCÓR</Link>
                </li>
                <li className={isActivePage('/contact')}> 
                    <Link to="/contact">Contato</Link>
                </li>
            </ul>
            
        </nav>
        </AnimatedComponent>
    )
}