import equipo from '../utils/Equipo.png';
import Carlota from '../utils/Carlota.png';
import Nacho from '../utils/Nacho.png';
import Random from '../utils/Random.png';
import fondoConchas from '../utils/fill.png';

const Conoce = () => {
  return (
    <div>
      {/* Sección con fondo */}
      <div
        className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 min-h-[40vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fondoConchas})`,
        }}
      >
          <div className="max-w-3xl text-center p-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Conócenos
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nacar somos una asociación que trabaja para el bienestar social y el desarrollo de las personas.
              Llevamos desde el año 2021 organizando campamentos para los más pequeños. Organizamos actividades que promuevan la interacción con la música, el deporte, la naturaleza y todo mientras nos divertimos.
            </p>
          </div>
        </div>
      {/* Sección de equipo */}
      <div className="flex flex-wrap items-center justify-center bg-white text-gray-800 py-12 px-6 lg:px-16">
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img src={equipo} alt="Equipo Nacar" className="h-80 w-auto" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tus campamentos y eventos personalizados
          </h2>
          <p className="text-lg text-gray-700">
            Contamos con un equipo especializado en el trato con niños, que incluye educadores, animadores, monitores de tiempo libre y psicólogos. Ellos son los encargados de organizar actividades de pintura, manualidades, multiaventura y deportes.
          </p>
        </div>
      </div>

{/* Sección de integrantes */}
      <div className="flex flex-col items-center justify-center bg-primary text-black py-12 px-6 lg:px-16">
        <div className="container max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nacho */}
          <div className="flex flex-col items-center text-gray-800 p-6 rounded-lg shadow-lg bg-white">
            <div className="border-4 border-primary overflow-hidden rounded-full mb-4">
              <img src={Nacho} alt="Nacho" className="object-cover w-40 h-40" />
            </div>
            <h2 className="text-lg font-bold">Nacho</h2>
            <p className="text-center text-gray-700">
              Trabajador Social, coordinador de grupos.
            </p>
            <a
              href="https:www.linkedin.com/in/ignacio-sánchez-sáiz-b38a44156/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl mt-2 text-arena hover:text-hoverRosa"></i>
            </a>
          </div>

          {/* Carlota */}
          <div className="flex flex-col items-center text-gray-800 p-6 rounded-lg shadow-lg bg-white">
            <div className="border-4 border-primary overflow-hidden rounded-full mb-4">
              <img src={Carlota} alt="Carlota" className="object-cover w-40 h-40" />
            </div>
            <h2 className="text-lg font-bold">Carlota</h2>
            <p className="text-center text-gray-700">
              Psicóloga y Directora de proyectos.
            </p>
            <a
              href="https://www.linkedin.com/in/carlota-baonza-324191214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl mt-2 text-arena hover:text-hoverRosa"></i>
            </a>
          </div>

          {/* Aida */}
          <div className="flex flex-col items-center text-gray-800 p-6 rounded-lg shadow-lg bg-white">
            <div className="border-4 border-primary overflow-hidden rounded-full mb-4">
              <img src={Random} alt="Aida" className="object-cover w-40 h-40" />
            </div>
            <h2 className="text-lg font-bold">Aida</h2>
            <p className="text-center text-gray-700">
              Coordinadora de proyectos (necesito una foto).
            </p>
            <a
              href="https://www.linkedin.com/in/carlota"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl mt-2 text-arena hover:text-hoverRosa"></i>
            </a>
          </div>
        </div>
      </div>


      {/* Sección de contacto */}
      <div className="flex flex-col items-center justify-center bg-primary text-white py-12 px-6 lg:px-16 mb-24">
        <h2 className="text-3xl font-bold mb-4 text-center">
          ¿Quieres trabajar con nosotros?
        </h2>
        <p className="text-lg mb-6 text-center">
          Envíanos tu currículum y nos pondremos en contacto contigo.{' '}
          <span className="font-semibold">¡Llámanos!</span>
        </p>
        <a
          href="tel:+34691247681"
          className="px-6 py-3 bg-arena text-white font-semibold rounded-lg hover:bg-rosa"
        >
          Envía tu CV
        </a>
      </div>
    </div>
  );
};

export default Conoce;
