import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"; 
import About from "./pages/About";
import Conocenos from "./pages/Conoce";
import Inscripcion from "./pages/Inscripcion";
import Eventos from "./pages/Eventos";
import Footer from "./components/Footer";
import '@fontsource/montserrat'; // Normal y negrita por defecto


export function App() {
  return (
    <BrowserRouter>
      <div className="font-sans"> {/* Clase global de fuente */}
        <Nav />
        <Routes>
          <Route path="" element={<About />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/inscripcion" element={<Inscripcion />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
