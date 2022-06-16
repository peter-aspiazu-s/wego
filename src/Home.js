import { Header } from "./components/header";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Servicios } from "./components/servicios";
import { Nosotros } from "./components/nosotros";
import { Ubicacion } from "./components/ubicacion";
import { PresentacionImagen } from "./components/galeria";
import { Contactos } from "./components/contactos";
import { Footer } from "./components/footer";

export const Home = () => {
    return(
        <>
            <Header />
            <Servicios />
            <hr />
            <Nosotros />
            <hr />
            <Ubicacion />
            <hr />
            <PresentacionImagen />
            <Contactos />
            <Footer />
        </>
    )
}