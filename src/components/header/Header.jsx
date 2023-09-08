import logo from "../../assets/images/logo.png";
import "./header.scss"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Header(){

    const [ref, inView] = useInView({
        triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento ficar visível
        threshold: 0, // Altere este valor conforme necessário para definir quando a animação deve começar
      });
    
      const variants = {
        hidden: { opacity: 0, y: 200 }, // Estado inicial (invisível)
        visible: { opacity: 1, y: 0 }, // Estado final (visível)
      };

      
    return(
        <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1.5, delay: 0 }}
        >
        <img src={logo} className="logo" />
        </motion.div>
    </div>
    )
}