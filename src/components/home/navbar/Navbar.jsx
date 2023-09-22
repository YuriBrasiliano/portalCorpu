import "./navbar.scss"
import AnimatedComponent from '../../../utils/AnimatedComponent';
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <AnimatedComponent duration={1.4} delay={1}>
        <nav className="nav">
            <ul>
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li> 
                <Link to="/specialties">Especialiades</Link>
                </li>

                <li> 
                    <Link to="/exams">Exames</Link>
                </li>
                <li> 
                    <Link to="/insurance">Convênios</Link>
                </li>
                <li> 
                    <Link to="/doctors">Corpo Clínico</Link>
                </li>

                <li> 
                    <Link to="/about">Sobre a GCÓR</Link>
                </li>
                <li> 
                    <Link to="/contact">Contato</Link>
                </li>
            </ul>
            
        </nav>
        
        </AnimatedComponent>
    )
}