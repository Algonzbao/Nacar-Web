import { useState } from "react";
import mural from "../Utils/mural.png";
import contorno from "../Utils/contorno.png";
import creatividad from "../Utils/creatividad.png";
import deporte from "../Utils/deporte.png";
import naturaleza from "../Utils/naturaleza.png";
import exploracion from "../Utils/exploracion.png";
import aventura1 from "../Utils/galeria/aventura/aventura1.png";
import aventura2 from "../Utils/galeria/aventura/aventura2.png";
import aventura3 from "../Utils/galeria/aventura/aventura3.png";
import aventura4 from "../Utils/galeria/aventura/aventura4.png";
import creatividad1 from "../Utils/galeria/creatividad/creatividad1.png";
import creatividad2 from "../Utils/galeria/creatividad/creatividad2.png";
import creatividad3 from "../Utils/galeria/creatividad/creatividad3.png";
import creatividad4 from "../Utils/galeria/creatividad/creatividad4.png";
import deporte1 from "../Utils/galeria/deporte/deporte1.png";
import deporte2 from "../Utils/galeria/deporte/deporte2.png";
import deporte3 from "../Utils/galeria/deporte/deporte3.png";
import deporte4 from "../Utils/galeria/deporte/deporte4.png";
import naturaleza1 from "../Utils/galeria/naturaleza/naturaleza1.png";
import naturaleza2 from "../Utils/galeria/naturaleza/naturaleza2.png";
import naturaleza3 from "../Utils/galeria/naturaleza/naturaleza3.png";
import naturaleza4 from "../Utils/galeria/naturaleza/naturaleza4.png";
import piscina from "../Utils/galeria/piscina/piscina.png";
import piscina1 from "../Utils/galeria/piscina/piscina1.png";
import piscina2 from "../Utils/galeria/piscina/piscina2.png";
import piscina3 from "../Utils/galeria/piscina/piscina3.png";
import cocina1 from "../Utils/galeria/cocina/cocina1.png";
import cocina2 from "../Utils/galeria/cocina/cocina2.png";
import cocina3 from "../Utils/galeria/cocina/cocina3.png";
import cocina4 from "../Utils/galeria/cocina/cocina4.png";
import cocina from "../Utils/cocina.png";

const eventosData = [
  {
    id: 1,
    title: "Piscina",
    description: "Un chapuzón con churros, pelotas, pistolas de agua.",
    img: piscina,
    gallery: [piscina, piscina2, piscina1,  piscina3],
  },
  {
    id: 2,
    title: "Deporte",
    description: "Deportes acuáticos y ejercico al aire libre, salud y diversión.",
    img: deporte,
    gallery: [deporte1, deporte2, deporte3,  deporte4],
  },
  {
    id: 3,
    title: "Creatividad",
    description: "Desarrollando la creatividad y las manualidades.",
    img: creatividad,
    gallery: [creatividad1, creatividad2, creatividad3,  creatividad4],
  },
  {
    id: 4,
    title: "Naturaleza",
    description: "Acercarnos a la naturaleza y cuidando de nuestro planeta.",
    img: naturaleza,
    gallery: [naturaleza1, naturaleza2, naturaleza3,  naturaleza4],
  },
  {
    id: 5,
    title: "Aventura",
    description: "Senderismo, tirolinas y exploración al aire libre, el favorito de los pequeños.",
    img: exploracion,
    gallery: [aventura1, aventura2, aventura3,  aventura4],
  },
  {
    id: 6,
    title: "Taller de Cocina",
    description: "Aprendemos a cocinar platos deliciosos y a divertirnos con la comida.",
    img: cocina,
    gallery: [cocina1, cocina2, cocina3,  cocina4],
  },
];

const ModalGallery = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose} // Cierra el modal cuando se hace clic fuera del contenido
    >
    <div className="bg-primary p-4 rounded-lg max-h-50 max-w-5xl w-full">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Galería ${index}`}
            className="object-fit-contain w-full h-auto max-h-100% rounded-md"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

const Eventos = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <div>
      <div
        className="flex flex-col lg:flex-row items-center justify-center px-6 h-[42vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contorno})`,
        }}
      >
        <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 p-4">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 text-center">
            Estos son los eventos que preparamos en NACAR
          </h1>
          <p className="text-lg text-gray-700">
            Nacar somos una asociación que trabaja para el bienestar social y el desarrollo de las personas. Llevamos
            desde el año 2021 organizando campamentos para los más pequeños. Organizando actividades que promuevan una
            interacción con la música, el deporte, la naturaleza y todo mientras nos divertimos.
          </p>
        </div>
      </div>

      {/* Texto descriptivo */}
      <div className="flex relative bg-primary text-white py-6 px-12 lg:px-16">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto mb-24">
            {/* Contenedor de texto */}
            <div className="w-full lg:w-1/2 text-left mt-4">
              <h3 className="text-3xl font-bold mb-4">Cómo es un día de campa</h3>
              <ul className="list-disc ml-6 mb-6">
                <li className="text mb-2">1 monitor por cada 10 niños: Garantizamos supervisión y atención personalizada.</li>
                <li className="text mb-2">Actividades diseñadas a medida: Adaptamos cada actividad a las necesidades de los participantes.</li>
                <li className="text mb-2">Horarios flexibles: Pensados para facilitar la conciliación de las familias.</li>
                <li className="text mb-2">
                  Espacios y recursos: Llevamos a cabo actividades en instalaciones municipales, centros educativos o espacios
                  cedidos por el AMPA o Ayuntamiento, adaptando materiales al entorno.
                </li>
                <li className="text mb-2">
                  Equipo profesional y cualificado: Contamos con monitores especializados en educación, deporte y ocio infantil, garantizando un entorno seguro, dinámico y enriquecedor para todos los participantes.
                </li>
              </ul>
              <h4 className="text-2xl font-bold mb-4">Beneficios para AMPAs y Ayuntamientos</h4>
              <ul className="list-disc ml-6">
                <li className="text mb-2">
                  Facilitación de la conciliación: Un recurso práctico para las familias durante periodos vacacionales.
                </li>
                <li className="text mb-2">Proximidad: Actividades organizadas en el propio municipio o entorno escolar.</li>
                <li className="text mb-2">
                  Fomento de valores: Promovemos respeto, igualdad y convivencia en cada actividad.
                </li>
                <li className="text mb-2">
                  Gestión integral: Nos encargamos de toda la organización, desde la planificación hasta la ejecución.
                </li>
              </ul>
            </div>
          <div className="w-full lg:w-1/2 text-right">
            <img src={mural} alt="Logo" className="ml-28 h-100 rounded-lg w-auto mx-auto items-center justify-center" />
          </div>
        </div>
      </div>

        {/* Tarjetas en formato 3x2 */}
        <div>
<div
  className="flex flex-col lg:flex-row items-center justify-center px-6 h-[12vh]">
  <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center mt-8">
    Nuestras Actividades
  </h1>
</div>
      <div className="flex flex-col items-center justify-center bg-white text-black py-12 px-6 lg:px-2 mb-24">
        <ModalGallery
          isOpen={!!selectedGallery}
          onClose={() => setSelectedGallery(null)}
          images={selectedGallery || []}
        />

        {/* Contenedor de las tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-screen-xl">
          {eventosData.map((evento, index) => {
            // Determinar el color de fondo y del texto dependiendo del índice
            const isEven = index % 2 === 0;
            const cardClass = isEven 
              ? "flex flex-col items-center p-8 rounded-lg shadow-lg bg-arena text-white" 
              : "flex flex-col items-center p-8 rounded-lg shadow-lg bg-white text-arena";

            // Definir el color del ícono dependiendo del color de fondo
            const iconColorClass = isEven ? "text-white" : "text-arena";

            return (
              <div key={evento.id} className={cardClass}>
                <div 
                  className="border-4 border-primary overflow-hidden cursor-pointer"
                  onClick={() => setSelectedGallery(evento.gallery)}
                >
                  <img src={evento.img} alt={evento.title} className="object-cover w-full h-64" />
                </div>
                <h2 className="text-lg font-bold mt-4">{evento.title}</h2>
                <p className="text-center">{evento.description}</p>
                <button
                  onClick={() => setSelectedGallery(evento.gallery)}
                  className={`text-2xl mt-4 ${iconColorClass} hover:text-hoverRosa`}
                >
                  <i className="fas fa-images"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
        </div>
        </div>
  );
};

export default Eventos;