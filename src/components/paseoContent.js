import "../css/paseo-content.css"
import { scrollItemMenu } from "../helpers/navbarFunction";

export const PaseoContent = () => {

    const handleClickItemMenu = (e) => {
        e.preventDefault();
        scrollItemMenu(e);
    }

    return (
        <div className="paseo-content-contenedor">
            <h2>Paseos en Bote</h2>
            <div className="paseo-contenedor">
                <div>
                    <iframe 
                        className="video-yt"
                        src="https://www.youtube.com/embed/fgiK_LjfJ5Q" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="container">
                    <p>Ven y aventurate en un viaje en bote por la costa de Miami, con las mejores vistas y la mejor brisa</p>
                    <a className="btn btn-primary" onClick={handleClickItemMenu} href="#contactos">Pide Más Información</a>
                </div>
            </div>
        </div>
    )
}