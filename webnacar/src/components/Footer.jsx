import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoBlanco from '../Utils/LogoBlanco.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateFooterVisibility = () => {
      // Detectar si hay scroll en la página
      const hasScroll =
        document.documentElement.scrollHeight > window.innerHeight;

      // Mostrar el footer si no hay scroll o si el usuario está en la parte inferior
      if (!hasScroll) {
        setIsVisible(true); // Mostrar el footer porque no hay scroll
      } else {
        const isAtBottom =
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight;
        setIsVisible(isAtBottom); // Mostrar solo si está en el final de la página
      }
    };

    // Evaluar al cargar la página y en cada cambio de tamaño
    updateFooterVisibility();
    window.addEventListener("resize", updateFooterVisibility);
    window.addEventListener("scroll", updateFooterVisibility);

    return () => {
      window.removeEventListener("resize", updateFooterVisibility);
      window.removeEventListener("scroll", updateFooterVisibility);
    };
  }, []);



  return (
    <footer
      className={`fixed bottom-0 left-0 w-full bg-primary text-white py-4 px-6 lg:px-10 flex items-center justify-between transition-all duration-400 ${
        isVisible ? 'footer-visible' : 'footer-hidden'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logoBlanco} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Enlaces */}
      <div className="hidden lg:flex">
        <ul className="flex gap-6 text-sm md:text-xl">
          <li>
            <Link to="/conocenos" className="hover:text-hoverRosa font-bold">
              Conoce
            </Link>
          </li>
          <li>
            <Link to="/eventos" className="hover:text-hoverRosa font-bold">
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/inscripcion" className="hover:text-hoverRosa font-bold">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div className="flex gap-4">
        <a href="https://www.facebook.com/nacarasociacion/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square text-xl hover:text-hoverRosa"></i>
        </a>
        <a href="https://www.instagram.com/nacarasociacion/?hl=es" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-xl hover:text-hoverRosa"></i>
        </a>
        <a href="https://es.linkedin.com/company/n%C3%A1car-asociaci%C3%B3n" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-xl hover:text-hoverRosa"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
