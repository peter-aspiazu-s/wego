import { Contactos } from "./components/contactos"
import { PresentacionImagen } from "./components/galeria"
import { HeaderPaseos } from "./components/headerPaseos"
import { Nosotros } from "./components/nosotros"
import { PaseoContent } from "./components/paseoContent"
import { Ubicacion } from "./components/ubicacion"

export const PaseosBote = () => {
    return(
        <>
            <HeaderPaseos />
            <PaseoContent />
            {/* <hr /> */}
            <Nosotros />
            <hr />
            <Ubicacion />
            <hr />
            <PresentacionImagen />
            <Contactos />
        </>
    )
}