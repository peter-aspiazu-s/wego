import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
                <Navbar.Brand className="titulo-web" href="#">WeGo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Nosotros</Nav.Link>
                    <NavDropdown title="Servicios" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Paseos en bote</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Fiestas en bote</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Turismo en bote</NavDropdown.Item>
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