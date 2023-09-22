import logo from "../../assets/images/logo.png";
import "./header.scss"
import React from 'react'; 
import AnimatedComponent from '../../utils/AnimatedComponent';
import {FaUserDoctor} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Header(){


  
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
        </AnimatedComponent>
    )
}