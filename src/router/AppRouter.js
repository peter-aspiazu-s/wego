import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { FiestasBote } from "../FiestasBote"
import { PaseosBote } from "../PaseosBote"
import { TurismoBote } from "../TurismoBote"
import { Menu } from "../components/navbar"
import { Footer } from "../components/footer"

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Menu />

            <Routes>
                <Route path="/wego" element={<Home />} />
                <Route path="wego/paseos-en-bote" element={<PaseosBote />} />
                <Route path="wego/fiestas-en-bote" element={<FiestasBote />} />
                <Route path="wego/turismo-en-bote" element={<TurismoBote />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}