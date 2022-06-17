import { Link } from "react-router-dom";
import "../css/footer.css";
import { scrollItemMenu } from "../helpers/navbarFunction";

export const Footer = () => {

    const handleClickItemMenu = (e) => {
        e.preventDefault();
        scrollItemMenu(e);
    }

    return(
        <div className="footer-contenedor">
            <div className="footer-contenedor-div">
                <ul>
                    <h3>Servicios:</h3>
                    <Link to="wego/paseos-en-bote" className="link-li">Paseos en Bote</Link>
                    <Link to="wego/turismo-en-bote" className="link-li">Guía Turística en Bote</Link>
                    <Link to="wego/fiestas-en-bote" className="link-li">Fiestas en Bote</Link>
                </ul>
                <ul className="ul-float">
                    <h3>Menu:</h3>
                 <li><a href="#arriba" onClick={handleClickItemMenu}>Arriba</a></li>
                   <li><a href="#nosotros" onClick={handleClickItemMenu}>Nosotros</a></li>
                    <li><a href="#contactos" onClick={handleClickItemMenu}>Contactos</a></li>
                    <li><a href="#ubicacion" onClick={handleClickItemMenu}>Ubicacion</a></li>
                   <li><a href="#destinos" onClick={handleClickItemMenu}>Destinos</a></li>
                </ul>
                <div className="footer-direccion">
                    <h3>Dirección:</h3>
                    <span>816 NW 11th St, Miami, FL 33136, EE. UU.</span>
                    <img src="./assets/img/logo-fondo.webp" />
                </div>
            </div>
            <hr />
            <div>
                Sitio Web de <a href="#">WeGo</a> | Diseñado y Desarrollado por <a href="#">Peter Aspiazu S.</a> ©2022
            </div>
        </div>
    )
}