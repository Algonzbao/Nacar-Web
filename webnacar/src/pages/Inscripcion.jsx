import fondoConchas from '../Utils/conchitas.png';
import Footer from "../components/Footer";

const Inscripcion = () => {
  return (
    <div className="flex flex-col lg:flex-row py-12">
      {/* Apartado de Contacto (Mitad Izquierda) */}
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 text-center">
            Contacto
          </h1>
          <p className="text-center text-lg text-gray-700 mb-6">
            Si tienes alguna duda o quieres inscribirte en cualquiera de nuestros
            campamentos infantiles puedes hacerlo desde los siguientes métodos.
            O si lo prefieres, rellena el formulario y nosotros nos pondremos en
            contacto contigo.
          </p>

          {/* Enlaces de contacto */}
          <div className="space-y-4 mb-6">
            <p className="text-center text-lg text-gray-700">
              <strong>Correo Electrónico: </strong>
              <a
                href="mailto:nacarasociacion@gmail.com"
                className="text-rosa hover:underline"
              >
                nacarasociacion@gmail.com
              </a>
            </p>
            <p className="text-center text-lg text-gray-700">
              <strong>Teléfono: </strong>
              <a
                href="tel:+34691247681"
                className="text-rosa hover:underline"
              >
                +34 691 247 681
              </a>
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="text-center text-lg text-gray-700 mb-6">
            <strong>O búscanos en redes sociales: </strong>
          </div>
          <div className="text-center flex space-x-6 justify-center ">
            <a
              href="https://www.facebook.com/nacarasociacion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square text-2xl text-arena hover:text-hoverRosa"></i>
            </a>
            <a
              href="https://www.instagram.com/nacarasociacion/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl text-arena hover:text-hoverRosa"></i>
            </a>
            <a
              href="https://es.linkedin.com/company/n%C3%A1car-asociaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl text-arena hover:text-hoverRosa"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Apartado de Formulario de Inscripción (Mitad Derecha) */}
      <div className="lg:w-1/2 p-6 flex items-center mr-12">
        <div
          className="w-full p-8 rounded-lg shadow-2xl"
          style={{
            backgroundImage: `url(${fondoConchas})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-3xl font-bold mb-4 text-center">
            Formulario de Inscripción
          </h1>
          <form
            className="space-y-4 p-6 rounded-lg"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const body = formData.get('message');

              // Validación para prevenir inyección de código
              const isMalicious = /<\/?[a-z][\s\S]*>/i.test(body);
              if (isMalicious) {
                alert('El contenido incluye caracteres no permitidos.');
                return;
              }

              // Procesa el formulario aquí (enviar datos al servidor o email)
              alert('Formulario enviado con éxito');
            }}
          >
            <div>
              <label className="block text-lg">Nombre:</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label className="block text-lg">Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="tudireccion@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-lg">Teléfono:</label>
              <input
                type="tel"
                name="phone"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="+34 123 456 789"
                required
              />
            </div>
            <div>
              <label className="block text-lg">Mensaje:</label>
              <textarea
                name="message"
                className="w-full p-2 border border-gray-300 rounded resize-none"
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-arena text-white font-semibold rounded-lg hover:bg-rosa"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscripcion;
