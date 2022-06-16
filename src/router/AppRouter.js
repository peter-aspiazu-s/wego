import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { FiestasBote } from "../FiestasBote"
import { PaseosBote } from "../PaseosBote"
import { TurismoBote } from "../TurismoBote"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="paseos-en-bote" element={<PaseosBote />} />
                <Route path="fiestas-en-bote" element={<FiestasBote />} />
                <Route path="turismo-en-bote" element={<TurismoBote />} />
            </Routes>
        </>
    )
}