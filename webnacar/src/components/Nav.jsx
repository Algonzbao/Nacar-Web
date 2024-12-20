import { Link } from "react-router-dom";
import logoNacar from '../Utils/LogoBlanco.png';

function Nav() {
  return (
    <nav className="bg-primary text-white">
      <div className="h-16 flex justify-between items-center px-6 py-4 w-full max-w-full">
        <div className="flex items-center">
          <Link to="" className="text-3xl font-bold flex items-center">
            <img
                src={logoNacar} 
                alt="Logo"
                className="h-12 w-auto mr-2" 
            />
          </Link>
        </div>
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
        <div className="lg:hidden block">
          <div className="relative">
            <button className="text-2xl">
              <span className="block w-8 h-1 bg-white mb-2"></span>
              <span className="block w-8 h-1 bg-white mb-2"></span>
              <span className="block w-8 h-1 bg-white"></span>
            </button>
            <div className="absolute top-16 left-0 w-full bg-slate-900 text-center p-5">
              <ul className="text-xl">
                <li className="my-4">
                  <Link to="/About" className="block hover:bg-slate-800 py-2 rounded">Sobre</Link>
                </li>
                <li className="my-4">
                  <Link to="/Conocenos" className="block hover:bg-slate-800 py-2 rounded">Conoce</Link>
                </li>
                <li className="my-4">
                  <Link to="/Inscripcion" className="block hover:bg-slate-800 py-2 rounded">Contacto</Link>
                </li>
                <li className="my-4">
                  <Link to="/Eventos" className="block hover:bg-slate-800 py-2 rounded">Eventos</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
