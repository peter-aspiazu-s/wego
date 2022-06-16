import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/navbar.css";

export const Menu = () => {

    return (
        <Navbar 
            className="position-fixed w-100" 
            bg="light" 
            expand="lg" 
            style={{zIndex: 1100}}
        >
            <Container>
                <Link className="navbar-brand" to="/">
                    <Navbar.Brand className="titulo-web" href="#">WeGo</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Nosotros</Nav.Link>
                    <NavDropdown title="Servicios" id="basic-nav-dropdown">
                        <Link className="navbar-brand" to="paseos-en-bote">
                            <NavDropdown.Item href="#action/3.1">Paseos en bote</NavDropdown.Item>
                        </Link>
                        <Link className="navbar-brand" to="fiestas-en-bote">
                            <NavDropdown.Item href="#action/3.2">Fiestas en bote</NavDropdown.Item>
                        </Link>
                        <Link className="navbar-brand" to="turismo-en-bote">
                            <NavDropdown.Item href="#action/3.3">Turismo en bote</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                    <Nav.Link href="#">Contactos</Nav.Link>
                    <Nav.Link href="#">Ubicación</Nav.Link>
                    <Nav.Link href="#">Destinos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}