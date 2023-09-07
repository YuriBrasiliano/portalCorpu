import "./bannerhome.scss"
import imagem from "../../assets/images/c-15.jpg"

export default function BannerHome(){
    return(
        <div className="bannerhome">
        <div className="banner-text">
          {/* Conteúdo de texto aqui */}
        </div>
        <img src={imagem} className="banner-img" alt="Imagem de fundo" />
      </div>
    )
}