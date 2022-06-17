import { Contactos } from "./components/contactos"
import { PresentacionImagen } from "./components/galeria"
import { HeaderTurismo } from "./components/headerTurismo"
import { Nosotros } from "./components/nosotros"
import { TurismoContent } from "./components/turismoContent"
import { Ubicacion } from "./components/ubicacion"

export const TurismoBote = () => {
    return(
        <>
            <HeaderTurismo />
            <TurismoContent />
            <Nosotros />
            <hr />
            <Ubicacion />
            <hr />
            <PresentacionImagen />
            <Contactos />
        </>
    )
}