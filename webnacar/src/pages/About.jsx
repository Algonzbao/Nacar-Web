import { Link } from "react-router-dom";
import campamentoImagen from '../utils/Campamento_Buendia.png';
import logoNacar from '../utils/LogoNacar.png';
import pajaro from '../utils/pájaro.png';
import manos from '../utils/handsOn.jpg';
import cumple from '../utils/cumpleaños.jpg';
import logoCorresponsables from '../utils/corresponsables.png';
import empresa from '../utils/empresa.png';
import urba from '../utils/empresa.jpg';
import ver21 from '../utils/verano21.png';
import ver22 from '../utils/verano22.png';
import ver23 from '../utils/verano23.png';
import ver24 from '../utils/verano24.png';
import Slider from '../components/slider.jsx'; 

import StoriesGallery from '../components/Stories';


const About = () => {
    // Ejemplo de datos de galerías
    const galleries = [
      {
        name: "Verano 2024",
        cover: ver24,
        images: [
          "https://scontent.fmad19-1.fna.fbcdn.net/v/t39.30808-6/234656322_144091157868361_1384775571138167461_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=bYGVGFaAAD4Q7kNvgF9yqjv&_nc_zt=23&_nc_ht=scontent.fmad19-1.fna&_nc_gid=ADMtULC3Qppx-6z-fMZPPpS&oh=00_AYA04-PFKYqbtAvq25YajNVuEErTeuCYXnL_cH-Ra78Dgg&oe=676A52BF",
          "https://scontent.fmad19-1.fna.fbcdn.net/v/t39.30808-6/234171865_144091167868360_4184580077145781338_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=573J1zD38MsQ7kNvgElZlES&_nc_zt=23&_nc_ht=scontent.fmad19-1.fna&_nc_gid=Ar1Zlyz7MGVwDMI0zUTc35_&oh=00_AYBrm0oJxFfwr_8NpScv94N-pY1FxGiIyoOzxFx7PWbLRQ&oe=676A1DA8",
          "https://scontent.fmad19-2.fna.fbcdn.net/v/t39.30808-6/227729423_141983881412422_1200501589701601357_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=w3WDlAYau1MQ7kNvgFQR4t7&_nc_zt=23&_nc_ht=scontent.fmad19-2.fna&_nc_gid=ArWAxqbytmmUtd4GzKKSRBq&oh=00_AYDvLyskjaTe0Q22ZV_eo2pDNrcDW2ncfqS34p49JO7Zuw&oe=676A3ACA",
        ],
      },
      {
        name: "Verano 2023",
        cover: ver23,
        images: [
          "https://scontent.fmad19-1.fna.fbcdn.net/v/t39.30808-6/351016593_615540033844692_5971679598112369088_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KH005M-qWZQQ7kNvgEgARW4&_nc_zt=23&_nc_ht=scontent.fmad19-1.fna&_nc_gid=A0s5xqYPm-pc3AaSE8N1235&oh=00_AYBZNFi7T9p1-f3M4QGWXU6Tob2EhwVtJPlbckaOngj4ag&oe=676A3B1F",
          "https://via.placeholder.com/600/f66b97",
          "https://via.placeholder.com/600/56a8c2",
        ],
      },
      {
        name: "Verano 2022",
        cover: ver22,
        images: [
          "https://scontent.fmad19-2.fna.fbcdn.net/v/t39.30808-6/285364612_341590434785098_3995474720735680241_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=svtMEhn6_ikQ7kNvgFcoiNT&_nc_zt=23&_nc_ht=scontent.fmad19-2.fna&_nc_gid=A1AvJVnBprQvHpqsy_YUntl&oh=00_AYB6qsf5QHFweELA-r9dO8HzuxYYRs07WV3ZSZ-WsE_3Pw&oe=676A393A",
          "https://scontent.fmad19-1.fna.fbcdn.net/v/t39.30808-6/287640419_348826257394849_5965318839602127710_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=QzGCzX74cLIQ7kNvgFYTYNR&_nc_zt=23&_nc_ht=scontent.fmad19-1.fna&_nc_gid=AlyJjb8fQeNUZFqpFe_ccnx&oh=00_AYD5g5_LrOdXUs9EMM2_IuMvxmpw6ZRDhts2zgE5zKNTdg&oe=676A2DB2",
          "https://scontent.fmad19-2.fna.fbcdn.net/v/t39.30808-6/292589038_367540075523467_7942608216969502798_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=hUsr43ghqb4Q7kNvgF_VdG4&_nc_zt=23&_nc_ht=scontent.fmad19-2.fna&_nc_gid=AtMxtSp8gPdgaEJ7fBBzaG7&oh=00_AYCfz9T3kR5ZbCpYSxKbsTtoOXxHsTO9p1DOmljzozCj1Q&oe=676A2C7E",
        ],
      },
      {
        name: "Verano 2021",
        cover: ver21,
        images: [
          "https://scontent.fmad19-2.fna.fbcdn.net/v/t1.6435-9/187950457_109152891362188_7418841244469781141_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=alb274sFqwYQ7kNvgFf-ESI&_nc_zt=23&_nc_ht=scontent.fmad19-2.fna&_nc_gid=A92MnQRpszak3SdARIzVsG4&oh=00_AYAh66R8VdHL1tC9Nto1JZOAeawP4yyvbJQxRow45F1HJQ&oe=678BC047",
          "https://scontent.fmad19-1.fna.fbcdn.net/v/t39.30808-6/221601782_132450809032396_669256484538212128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=swhXbuZ4oYcQ7kNvgGX8ygN&_nc_zt=23&_nc_ht=scontent.fmad19-1.fna&_nc_gid=ALSd7P1u8NqN5pF-sevl6xP&oh=00_AYBP8SN7oi6bgrKilGQWE5vKvr-09USTHubZCEGARz7y3w&oe=676A3A0C",
          "https://scontent.fmad19-1.fna.fbcdn.net/v/t39.30808-6/217629521_132975888979888_6986473601949929822_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=UTZCn0KnzBwQ7kNvgEBvLwa&_nc_zt=23&_nc_ht=scontent.fmad19-1.fna&_nc_gid=Ap5PG6eYArdcTVJflBZmVI0&oh=00_AYBpwwqgAONAF3Jyuamza6cFpvutq23qsDs0kb6fIogHKw&oe=676A24D8",
          "https://scontent.fmad19-2.fna.fbcdn.net/v/t39.30808-6/225961881_137150778562399_5590839654884933452_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=oIci8SiAwiEQ7kNvgGxo4kz&_nc_zt=23&_nc_ht=scontent.fmad19-2.fna&_nc_gid=AmynCO116o92c_mE8hJbTYH&oh=00_AYD1N8vUgAoL8YpQrpmkz9WHqHYXZrVhhcUC9eAhTgNWEQ&oe=676A49B9",
          "https://scontent.fmad19-2.fna.fbcdn.net/v/t39.30808-6/225583154_137150761895734_6660658309687230321_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=0YqzCTJpdjgQ7kNvgGrpDwC&_nc_zt=23&_nc_ht=scontent.fmad19-2.fna&_nc_gid=ARdwmh7MSMolbb9zy7MpJsw&oh=00_AYBwgB8j8gYn3_1RqFipOzrIZe4xIh9v4xUfGByl32SX8g&oe=676A51FA",
          "https://scontent.fmad19-2.fna.fbcdn.net/v/t39.30808-6/212488203_141983908079086_5108199561722054593_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=nS7gh6RUHt0Q7kNvgEmBpwY&_nc_zt=23&_nc_ht=scontent.fmad19-2.fna&_nc_gid=AKnC7Qn8-9F4c-koAItThfh&oh=00_AYD5kMId-mLGSHqpecwtVPb89jgb1rXSzhNjlhKJeb6-Pg&oe=676A1EEE",
          

        ],
      }
    ];
  
  return (
<div>
  {/* Sección con fondo y contenido principal */}
  <div
    className="relative w-full min-h-[90vh] bg-cover bg-bottom"
    style={{
      backgroundImage: `url(${campamentoImagen})`,
    }}
  >
    <div className="absolute top-0 left-0 w-full h-full primary font-sans">
      <StoriesGallery galleries={galleries} />
      <div className="flex items-center justify-start h-full px-8 sm:px-10 text-white">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            ¡Bienvenido a nuestra página!
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Regístrate ahora y empieza a disfrutar de nuestros servicios.
          </p>
          <Link
            to="/Inscripcion"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-rosa transition-colors duration-300"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Sección de texto e imagen */}
  <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10 bg-gray-50">
    <div className="lg:w-1/2">
      <img src={logoNacar} alt="Logo Nacar" className="w-full h-auto" />
    </div>
    <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Tus campamentos y eventos personalizados
      </h2>
      <p className="text-lg text-gray-700">
        Ofrecemos campamentos únicos diseñados para cada grupo, adaptados a tus
        necesidades y preferencias. Ya sea para empresas, instituciones
        educativas o grupos familiares, te brindamos una experiencia inolvidable
        en un entorno natural. ¡Contacta con nosotros y organiza tu próximo
        evento!
      </p>
    </div>
  </div>

  {/* Sección con fondo de color y texto */}
  <div className="bg-primary text-white py-10 px-6 lg:px-16">
    <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Desde 2010, ofreciendo experiencias inolvidables para toda la familia
        </h3>
        <p className="text-lg mb-4">
          En <strong>NÁCAR ASOCIACIÓN</strong>, nos especializamos en crear
          momentos únicos y memorables. Con más de 3000 participantes por
          temporada, ofrecemos una amplia gama de eventos, incluyendo campamentos
          de verano, cumpleaños personalizados, comuniones y más.
        </p>
        <p className="text-lg mb-6">
          Ya sea que busques una aventura en la naturaleza o un evento privado en
          un entorno exclusivo, tenemos lo que necesitas para hacerlo especial.
        </p>
        <Link
          to="/Eventos"
          className="px-6 py-3 bg-rosa text-white font-semibold rounded-lg hover:bg-arena transition-colors duration-300"
        >
          Descubre nuestros eventos
        </Link>
      </div>
      <div className="lg:w-1/3 flex justify-center lg:justify-end">
        <img
          src={pajaro}
          alt="Logo"
          className="h-60 w-auto" // Ajuste del tamaño del logo
        />
      </div>
    </div>
  </div>

{/* CONTENEDOR LLAMAR AHORA */}
<div className="flex flex-col items-center justify-center bg-white text-black py-12 px-6 lg:px-16">
  <h2 className="text-3xl font-bold text-center mb-4">
    ¿Tienes algún evento en el que quisieras que te acompañáramos?
  </h2>
  <p className="text-lg mb-6 text-center">
    Ponte en contacto con nosotros. 
    <span className="font-semibold"> ¡Llámanos!</span>
  </p>
  <a
    href="tel:+34691247681"
    className="px-6 py-3 bg-arena text-white font-semibold rounded-lg hover:bg-rosa transition-colors duration-300"
  >
    Llamar ahora
  </a>
</div>

{/* CONTENEDOR DE BLOQUES ADICIONALES */}
<div className="flex flex-col lg:flex-row justify-center items-stretch mt-12 w-full max-w-7xl mx-auto gap-6">
  {/* BLOQUE 1: CUMPLEAÑOS */}
  <div className="flex flex-col items-center bg-arena text-gray-800 p-8 pb-16 rounded-lg shadow-lg w-full lg:w-1/3 relative">
    <img
      src={cumple} // Reemplaza con la URL real de la imagen
      alt="Cumpleaños"
      className="w-full h-48 object-cover rounded-t-lg mb-4"
    />
    <h3 className="text-2xl font-bold mb-2">Cumpleaños</h3>
    <p className="text-base mb-6 text-center">
      ¡Celebra momentos inolvidables con nosotros! Organizamos tu cumpleaños soñado.
    </p>
    <Link
      to="/Inscripcion"
      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-rosa transition-colors duration-300 absolute bottom-6"
    >
      Contactar
    </Link>
  </div>

  {/* BLOQUE 2: EMPRESA */}
  <div className="flex flex-col items-center bg-arena text-gray-800 p-8 pb-16 rounded-lg shadow-lg w-full lg:w-1/3 relative">
    <img
      src={empresa} // Reemplaza con la URL real de la imagen
      alt="Empresa"
      className="w-full h-48 object-cover rounded-t-lg mb-4"
    />
    <h3 className="text-2xl font-bold mb-2">Empresa</h3>
    <p className="text-base mb-6 text-center">
      Diseñamos eventos corporativos únicos para fortalecer tu equipo.
    </p>
    <Link
      to="/Inscripcion"
      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-rosa transition-colors duration-300 absolute bottom-6"
    >
      Contactar
    </Link>
  </div>

  {/* BLOQUE 3: URBANIZACIONES */}
  <div className="flex flex-col items-center bg-arena text-gray-800 p-8 pb-16 rounded-lg shadow-lg w-full lg:w-1/3 relative">
    <img
      src={urba} // Reemplaza con la URL real de la imagen
      alt="Urbanizaciones"
      className="w-full h-48 object-cover rounded-t-lg mb-4"
    />
    <h3 className="text-2xl font-bold mb-2">Urbanizaciones</h3>
    <p className="text-base mb-6 text-center">
      Organizamos actividades especiales para urbanizaciones y comunidades.
    </p>
    <Link
      to="/Inscripcion"
      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-rosa transition-colors duration-300 absolute bottom-6"
    >
      Contactar
    </Link>
  </div>
</div>


{/* CONTENEDOR CON LOGO Y SLIDER */}
<div className="flex flex-col items-center justify-center py-12 px-6 mt-8 w-full">
  <div className="mb-6 text-center">
    <img
      src={logoCorresponsables} // Asegúrate de haber importado esta imagen
      alt="Logo Corresponsables"
      className="w-40 mx-auto mb-4"
    />
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Experiencia con Ayuntamientos:
    </h2>
  </div>
  <p className="text-lg text-gray-700 mb-8 text-center">
    A través del Plan Corresponsables hemos podido trabajar con los ayuntamientos de:
  </p>
  <div className="slider-container w-full flex justify-center">
    <Slider />
  </div>
</div>

{/* SECCIÓN FINAL */}
<div className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 bg-primary rounded-lg shadow-lg mb-20">
  {/* Imagen */}
  <div className="flex lg:w-1/3 lg:pr-8 mb-6 lg:mb-0">
    <img
      src={manos} 
      alt="Campamento"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>
  {/* Texto */}
  <div className="lg:w-2/3 text-left">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      ¡Inscríbete ahora y vive una experiencia inolvidable!
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      Descubre todo lo que tenemos preparado para ti en nuestros campamentos y eventos personalizados. Vive aventuras únicas en un entorno natural, perfecto para grupos, familias y empresas.
    </p>
    <Link
      to="/Inscripcion"
      className="px-6 py-3 bg-rosa text-white font-semibold rounded-lg hover:bg-arena transition-colors duration-300"
    >
      Ir a Contacto
    </Link>
  </div>
</div>
</div>
  );
};

export default About;
