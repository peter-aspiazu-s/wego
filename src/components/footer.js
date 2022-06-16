import "../css/footer.css";

export const Footer = () => {
    return(
        <div className="footer-contenedor">
            <div className="footer-contenedor-div">
                <ul>
                    <h3>Servicios</h3>
                    <a href="#"><li>Paseos en Bote</li></a>
                    <a href="#"><li>Guía Turística en Bote</li></a>
                    <a href="#"><li>Fiestas en Bote</li></a>
                </ul>
                <ul className="ul-float">
                    <a href="#"><li>Inicio</li></a>
                    <a href="#"><li>Nosotros</li></a>
                    <a href="#"><li>Contactos</li></a>
                    <a href="#"><li>Ubicacion</li></a>
                    <a href="#"><li>Destinos</li></a>
                </ul>
            </div>
            <hr />
            <div>
                Sitio Web de <a href="#">WeGos</a> | Diseñado y Desarrollado por <a href="#">Peter Aspiazu S.</a> 2022
            </div>
        </div>
    )
}