import { Accordion } from "react-bootstrap"
import "../css/contactos.css";

export const Contactos = () => {
    return(
        <div className="contactos-contenedor bg-secondary ">
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