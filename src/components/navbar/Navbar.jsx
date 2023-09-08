import "./navbar.scss"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Navbar(){

    
    const [ref, inView] = useInView({
        triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento ficar visível
        threshold: 1, // Altere este valor conforme necessário para definir quando a animação deve começar
      });
    
      const variants = {
        hidden: { opacity: 0, y: 30 }, // Estado inicial (invisível)
        visible: { opacity: 1, y: 0 }, // Estado final (visível)
      };

    return(
        <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, delay: 0.5}}
        >
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
        </motion.div>
    </div>
    )
}