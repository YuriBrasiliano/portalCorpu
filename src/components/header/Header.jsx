import logo from "../../assets/images/logo.png";
import "./header.scss"

export default function Header(){
    return(
        <>
        <img src={logo} className="logo" />
        </>
    )
}