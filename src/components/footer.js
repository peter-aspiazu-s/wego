import { Link } from "react-router-dom";
import "../css/footer.css";

export const Footer = () => {
    return(
        <div className="footer-contenedor">
            <div className="footer-contenedor-div">
                <ul>
                    <h3>Servicios:</h3>
                    <Link to="paseos-en-bote" className="link-li">Paseos en Bote</Link>
                    <Link to="turismo-en-bote" className="link-li">Guía Turística en Bote</Link>
                    <Link to="fiestas-en-bote" className="link-li">Fiestas en Bote</Link>
                </ul>
                <ul className="ul-float">
                    <h3>Menu:</h3>
                    <a href="#"><li>Arriba</li></a>
                    <a href="#"><li>Nosotros</li></a>
                    <a href="#"><li>Contactos</li></a>
                    <a href="#"><li>Ubicacion</li></a>
                    <a href="#"><li>Destinos</li></a>
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