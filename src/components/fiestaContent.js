import "../css/paseo-content.css"
import { scrollItemMenu } from "../helpers/navbarFunction";

export const FiestaContent = () => {

    const handleClickItemMenu = (e) => {
        e.preventDefault();
        scrollItemMenu(e);
    }

    return (
        <div className="paseo-content-contenedor">
            <h2>Fiestas en Bote</h2>
            <div className="paseo-contenedor">
                <div>
                    <iframe 
                        className="video-yt" 
                        src="https://www.youtube.com/embed/ir0iD_lVKrs" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="container">
                    <p>Texto de contenido, Texto de contenido, Texto de contenido, Texto de contenido, Texto de contenido, Texto de contenido, Texto de contenido, Texto de contenido, </p>
                    <a className="btn btn-primary" onClick={handleClickItemMenu} href="#contactos">Pide Más Información</a>
                </div>
            </div>
        </div>
    )
}