import { useState } from "react";
import { Link } from "react-router-dom";
import logoNacar from '../utils/logoBlanco.png';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white">
      <div className="h-16 flex justify-between items-center px-6 py-4 w-full max-w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold flex items-center">
            <img
              src={logoNacar}
              alt="Logo"
              className="h-12 w-auto mr-2"
            />
          </Link>
        </div>

        {/* Links visibles en pantallas grandes */}
        <div className="hidden lg:flex items-center">
          <ul className="flex gap-8 text-xl">
            <li>
              <Link to="/Conocenos" className="hover:text-hoverRosa font-bold">Conoce</Link>
            </li>
            <li>
              <Link to="/Eventos" className="hover:text-hoverRosa font-bold">Eventos</Link>
            </li>
            <li>
              <Link to="/Inscripcion" className="hover:text-hoverRosa font-bold">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Botón del menú hamburguesa en pantallas pequeñas */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-2xl focus:outline-none"
          >
            <span className="block w-8 h-1 bg-white mb-2"></span>
            <span className="block w-8 h-1 bg-white mb-2"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-900 text-center p-5 z-50">
          <ul className="text-xl">
            <li className="my-4">
              <Link 
                to="/Conocenos" 
                className="block hover:bg-slate-800 py-2 rounded" 
                onClick={() => setIsMenuOpen(false)}
              >
                Conoce
              </Link>
            </li>
            <li className="my-4">
              <Link 
                to="/Inscripcion" 
                className="block hover:bg-slate-800 py-2 rounded" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li className="my-4">
              <Link 
                to="/Eventos" 
                className="block hover:bg-slate-800 py-2 rounded" 
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
