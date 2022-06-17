import { Header } from "./components/header";
// import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Servicios } from "./components/servicios";
import { Nosotros } from "./components/nosotros";
import { Ubicacion } from "./components/ubicacion";
import { PresentacionImagen } from "./components/galeria";
import { Contactos } from "./components/contactos";

import "./index.css";

export const Home = () => {

    

    return(
        <>
            <Header />
            <Servicios />
            <Nosotros />
            <Ubicacion />
            <hr />
            <PresentacionImagen />
            <Contactos />
        </>
    )
}