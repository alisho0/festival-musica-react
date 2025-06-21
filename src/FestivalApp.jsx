import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./pages/Inicio"
import { Navbar } from "./components/Navbar"
import { Artistas } from "./pages/Artistas"
import { Entradas } from "./pages/Entradas"
import { Ubicacion } from "./pages/Ubicacion"
import { Contacto } from "./pages/Contacto"
import { Cronograma } from "./pages/Cronograma"


function FestivalApp() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="artistas" element={<Artistas />} />
        <Route path="entradas" element={<Entradas />} />
        <Route path="ubicacion" element={<Ubicacion />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="cronograma" element={<Cronograma />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default FestivalApp
