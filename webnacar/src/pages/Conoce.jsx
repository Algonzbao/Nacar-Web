import equipo from '../utils/Equipo.png';
import Carlota from '../utils/Carlota.png';
import Nacho from '../utils/Nacho.png';
import Random from '../utils/Random.png';
import fondoConchas from '../utils/fill.png';

const Conoce = () => {
    return (
      <div>
        <div 
          className="flex flex-col lg:flex-row items-center justify-center px-6 h-[40vh] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${fondoConchas})`
                  }}
        >
          <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 p-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4 text-center">
              Conócenos
            </h1>
            <p className="text-lg text-gray-700">
              Nacar somos una asociación que trabaja para el bienestar social y el desarrollo de las personas.
              Llevamos desde el año 2021 organizando campamentos para los más pequeños.
              Organizando actividades que promuevan una interacción con la música, el deporte, la naturaleza y todo mientras nos divertimos.
            </p>
          </div>
        </div>

      <div className=" flex items-center justify-center relative bg-white text-white py-6 px-12 lg:px-16 h-[45vh]">
          <div className="lg:w-1/2">
              <img
              src={equipo}
              alt="Equipo Nacar"
              className="h-80 w-auto mx-auto"
              />
            </div>
            {/* Texto en el centro */}
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Tus campamentos y eventos personalizados
              </h2>
              <p className="items-center justify-center lg:w-1/2 text-lg text-gray-700">
               Contamos con un equipo especializado en el trato con niños, contamos con educadores, animadores, monitores de tiempo libre, psicólogos...
               Ellos son los encargados de organizar las actividades de pintura, manualidades, multiaventura, deporte y todo lo que se pueda imaginar. 
              </p>
            </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-primary text-black py-12 px-6 lg:px-2">
  {/* Contenedor de las imágenes */}
  <div className="flex justify-center items-center gap-6 w-full max-w-8xl">

          <div className="flex flex-col items-center text-gray-800 p-8 rounded-lg shadow-lg w-1/4 bg-white ">
            <div className="border-4 border-primary overflow-hidden mb-4"
            >
              <img
                src={Nacho}
                alt="Nacho"
                className="object-cover w-64 h-64"
              />
            </div>
            <h2 className="text-lg font-bold">Nacho</h2>
            <p className="text-center text-gray-700">
              Trabajador Social, coordinador de grupos.
            </p>
            <a href="https:www.linkedin.com/in/ignacio-sánchez-sáiz-b38a44156/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl mt-2 text-arena hover:text-hoverRosa"></i>
            </a>
          </div>

          <div className="flex flex-col items-center text-gray-800 p-8 rounded-lg shadow-lg w-1/4 bg-white">
            <div className="border-4 border-primary overflow-hidden mb-4">
              <img 
                src={Carlota}
                alt="Carlota"
                className="object-cover w-64 h-64"
              />
            </div>
            <h2 className="text-lg font-bold">Carlota</h2>
            <p className="text-center text-gray-700">
              Psicóloga y Directora de proyectos.
            </p>
            <a href="https://www.linkedin.com/in/carlota-baonza-324191214/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl mt-2 text-arena hover:text-hoverRosa"></i>
            </a>
          </div>

          {/* Tercera imagen */}
          <div className="flex flex-col items-center text-gray-800 p-8 rounded-lg shadow-lg w-1/4 bg-white">
            <div className="border-4 border-primary overflow-hidden  mb-4">
              <img
                src={Random}
                alt="Random"
                className="object-cover w-64 h-64"
              />
            </div>
            <h2 className="text-lg font-bold">Aida</h2>
            <p className="text-center text-gray-700">
              Coordinadora de proyectos (necesito una foto)
            </p>
            <a href="https://www.linkedin.com/in/carlota" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl mt-2 text-arena hover:text-hoverRosa"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-primary text-white py-6 px-12 lg:px-16 h-[35vh]">
        <h2 className="text-3xl font-bold mb-4 text-center">
          ¿Quieres trabajar con nosotros?
        </h2>
        <p className="text-lg mb-6 text-center">
          Envíanos tu currículum y nos ponemos en contacto contigo. 
          <span className="font-semibold"> ¡Llámanos!</span>
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
  