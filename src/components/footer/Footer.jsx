import "./footer.scss"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Footer(){
    const [ref, inView] = useInView({
        triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento ficar visível
        threshold: 1, // Altere este valor conforme necessário para definir quando a animação deve começar
      });
    
      const variants = {
        hidden: { opacity: 0, y: 0.1 }, // Estado inicial (invisível)
        visible: { opacity: 1, y: 0 }, // Estado final (visível)
      };

    return (
        <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, delay: 0.5}}
        >
        <div className="footer">
        </div>
        </motion.div>
    </div>
    )
}