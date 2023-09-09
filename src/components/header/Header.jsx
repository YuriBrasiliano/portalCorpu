import logo from "../../assets/images/logo.png";
import "./header.scss"
import AnimatedComponent from '../../utils/AnimatedComponent';

export default function Header(){
      
    return(
      <AnimatedComponent duration={1.4} delay={0.5}>
        <img src={logo} className="logo" />
        </AnimatedComponent>
    )
}