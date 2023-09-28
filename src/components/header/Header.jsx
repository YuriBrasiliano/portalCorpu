import logo from "../../assets/images/logo.png";
import "./header.scss"
import React from 'react';
import AnimatedComponent from '../../utils/Animations/AnimatedComponent';
import { FaUserDoctor } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Header() {

  const [navigationMenu, setNavigationMenu] = useState(null);
  const [titlenavbar, settitlenavbar] = useState(null);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    settitlenavbar(document.querySelector('.titlenavbar'));
    setNavigationMenu(document.querySelector('.nav ul'));
    setCurrentPath(location.pathname);
  }, [location]);


  const closeMenu = () => {
    if (innerWidth >= "850px") {
      navigationMenu.classList.remove('active');
      titlenavbar.style.display = 'block';
    }
  };
  const openMenu = () => {
    navigationMenu.classList.toggle('active');
    titlenavbar.style.display = 'none';
  }
  const isActivePage = (page) => {
    return currentPath === page ? 'page' : '';
  };


  return (
    <>
      <AnimatedComponent duration={1.4} delay={0.5} y={-100} className={"container-header"}>

        <AnimatedComponent duration={1} delay={1.5} x={-200} xExit={-200}>
          <Link to="/"><img src={logo} className="logo-header" /> </Link>
        </AnimatedComponent>
        <AnimatedComponent duration={1} delay={1.5} x={200} xExit={200}>
          <Link to="https://resultados.alcordiagnosticos.com.br/web_laudos/login.asp" target="_blank">
            <div class="button-container-portal">
              <div class="button-portal">
                <button class="hover-button-portal"><FaUserDoctor className="button-icon-portal" /></button>
                <div class="text-portal">Acessar Portal GCÓR</div>
              </div>

            </div>

          </Link>
        </AnimatedComponent>
      </AnimatedComponent>
      <AnimatedComponent duration={1.4} delay={0.5} x={-1000} className={"nav"} xExit={1000}>
        <div className="menu-toggle" onClick={() => openMenu()}>
          <div className="titlenavbar">Menu</div>
          <br />
        </div>
        <ul className="nav-list">
          <li className={isActivePage('/')}>
            <Link to="/" onClick={() => closeMenu()}>Home</Link>
          </li>
          <li className={isActivePage('/specialties')}>
            <Link to="/specialties" onClick={() => closeMenu()}>Especialiades</Link>
          </li>
          <li className={isActivePage('/exams')}>
            <Link to="/exams" onClick={() => closeMenu()}>Exames</Link>
          </li>
          <li className={isActivePage('/insurance')}>
            <Link to="/insurance" onClick={() => closeMenu()}>Convênios</Link>
          </li>
          <li className={isActivePage('/doctors')}>
            <Link to="/doctors" onClick={() => closeMenu()}>Corpo Clínico</Link>
          </li>
          <li className={isActivePage('/about')}>
            <Link to="/about" onClick={() => closeMenu()}>Sobre a GCÓR</Link>
          </li>
          <li className={isActivePage('/contact')}>
            <Link to="/contact" onClick={() => closeMenu()}>Contato</Link>
          </li>
        </ul>
      </AnimatedComponent>
    </>
  )
}