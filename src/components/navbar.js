import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { scrollItemMenu } from "../helpers/navbarFunction";

export const Menu = () => {

    const handleClickItemMenu = (e) => {
        e.preventDefault();
        scrollItemMenu(e);
    }

    return (
        <Navbar 
            className="position-fixed w-100" 
            bg="light" 
            expand="lg" 
            style={{zIndex: 1100}}
        >
            <Container>
                <Link className="navbar-brand" to="/wego/">
                    <Navbar.Brand className="titulo-web" href="#">
                        <img src="./assets/img/ico-logo.png" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link 
                        href="#nosotros"
                        onClick={handleClickItemMenu}
                    >Nosotros</Nav.Link>
                    <NavDropdown title="Servicios" id="basic-nav-dropdown">
                        <Link className="navbar-brand" to="wego/paseos-en-bote">
                            <NavDropdown.Item href="#action/3.1">Paseos en bote</NavDropdown.Item>
                        </Link>
                        <Link className="navbar-brand" to="wego/fiestas-en-bote">
                            <NavDropdown.Item href="#action/3.2">Fiestas en bote</NavDropdown.Item>
                        </Link>
                        <Link className="navbar-brand" to="wego/turismo-en-bote">
                            <NavDropdown.Item href="#action/3.3">Turismo en bote</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                    <Nav.Link 
                        href="#contactos"
                        onClick={handleClickItemMenu}
                    >Contactos</Nav.Link>
                    <Nav.Link 
                        href="#ubicacion"
                        onClick={handleClickItemMenu}
                    >Ubicación</Nav.Link>
                    <Nav.Link 
                        href="#destinos"
                        onClick={handleClickItemMenu}
                    >Destinos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}