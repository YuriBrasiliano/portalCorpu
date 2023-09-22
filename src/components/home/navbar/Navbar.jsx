import "./navbar.scss"
import AnimatedComponent from '../../../utils/AnimatedComponent';

export default function Navbar(){
    return(
        <AnimatedComponent duration={1.4} delay={1}>
        <nav className="nav">
            <ul>
                <li> 
                    <a href="/">Home</a>
                </li>
                <li> 
                    <a href="/especialidades">Especialiades</a>
                </li>

                <li> 
                    <a href="/exames">Exames</a>
                </li>
                <li> 
                    <a href="/convenios">Convênios</a>
                </li>
                <li> 
                    <a href="/corpoclinico">Corpo Clínico</a>
                </li>

                <li> 
                    <a href="/sobre">Sobre a GCÓR</a>
                </li>
                <li> 
                    <a href="/contato">Contato</a>
                </li>
            </ul>
        </nav>
        </AnimatedComponent>
    )
}