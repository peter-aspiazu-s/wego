import { Accordion } from "react-bootstrap"
import "../css/contactos.css";

export const Contactos = () => {
    return(
        <div id="contactos" className="contactos-contenedor">

            <div className="wave3" >
                <svg className="wave-svg3" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path className="wave-path3" d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
            </div>

            <h2>Contactos</h2>
            <div className="container">
                <Accordion className="acordeon-redes" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Redes Sociales</Accordion.Header>
                        <Accordion.Body>
                            <div className="acordeon-redes-container">
                                <div>
                                    <a href="#"><i class="fa-brands fa-instagram"></i> @wegos</a>
                                </div>
                                <div>
                                    <a href="#"><i class="fa-brands fa-facebook"></i> wegos</a>
                                </div>
                                <div>
                                    <a href="#"><i class="fa-brands fa-whatsapp"></i> +593 98 533 0054</a>
                                </div>
                                <div>
                                    <a href="#"><i class="fa-brands fa-whatsapp"></i> +1 (949) 501-5128</a>
                                </div>
                                <div>
                                    <a href="#"><i class="fa-brands fa-whatsapp"></i> +1 (949) 774-9242</a>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}