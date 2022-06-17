import { Button } from "react-bootstrap";
import "../css/nosotros.css";

export const Nosotros = () => {
    return (
        <div className="nosotros-contenedor">

            <div className="wave1" >
                <svg className="wave-svg1" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path className="wave-path1" d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
            </div>

            <div id="nosotros" className="contenedor container">
                <h2 className="my-3">Nosotros</h2>
                <p>Empezamos este negocio hace unos años, texto texto texto texto texto texto texto texto texto</p>
                <div className="contenedor-avatar1">
                    <div className="contenedor-img-avatar1">
                        <img className="img-avatar1" src="./assets/img/avatar1.webp" />
                    </div>
                    <div className="contenedor-contenido-avatar1">
                        <h3>Christian Gonzalez</h3>
                        <p>Auditor 1994-1999, Emprendedor, Empresario, Analista, Creador de Empresas en España y EEUU</p>
                        <Button className="btn-nosotros border">Llama Ya!</Button>
                    </div>
                </div>
                
                <div className="contenedor-avatar2 mt-5">
                    <div className="contenedor-img-avatar2">
                        <img className="img-avatar2" src="./assets/img/avatar2.webp" />
                    </div>
                    <div className="contenedor-contenido-avatar2">
                        <h3>Nombre y Apellido</h3>
                        <p>Texto Opcional</p>
                        <Button className="btn-nosotros border">Llama Ya!</Button>
                    </div>
                </div>
            </div>

            <div className="wave2" >
                <svg className="wave-svg2" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path className="wave-path2" d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
            </div>

        </div>
    )
}