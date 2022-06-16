import { Header } from "./components/header";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Servicios } from "./components/servicios";
import { Nosotros } from "./components/nosotros";

export const App = () => {
    return(
        <>
            <Header />
            <Servicios />
            <Nosotros />
        </>
    )
}