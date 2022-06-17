import { Contactos } from "./components/contactos"
import { FiestaContent } from "./components/fiestaContent"
import { PresentacionImagen } from "./components/galeria"
import { HeaderFiestas } from "./components/headerFiestas"
import { Nosotros } from "./components/nosotros"
import { Ubicacion } from "./components/ubicacion"

export const FiestasBote = () => {
    return(
        <>
            <HeaderFiestas />
            <FiestaContent />
            <Nosotros />
            <hr />
            <Ubicacion />
            <hr />
            <PresentacionImagen />
            <Contactos />
        </>
    )
}