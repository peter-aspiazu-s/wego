import "../css/footer.css";

export const Footer = () => {
    return(
        <div className="footer-contenedor container">
            <ul>
                <h3>Servicios</h3>
                <a href="#"><li>Paseos en Bote</li></a>
                <a href="#"><li>Guía Turística en Bote</li></a>
                <a href="#"><li>Fiestas en Bote</li></a>
            </ul>
            <hr />
            <div>
                Sitio Web de <a href="#">WeGos</a> | Diseñado y Desarrollado por <a href="#">Peter Aspiazu S.</a> 2022
            </div>
        </div>
    )
}