import { useState, useEffect } from 'react';

// Importe las imágenes desde la carpeta escudos
import escudo1 from '../utils/escudos/buendia.svg';
import escudo2 from '../utils/escudos/aranzueque.svg';
import escudo3 from '../utils/escudos/renera.svg';
import escudo4 from '../utils/escudos/villar de domingo.svg';
import escudo5 from '../utils/escudos/pozorrubio.svg';
import escudo6 from '../utils/escudos/horche.svg';
import escudo7 from '../utils/escudos/atienza.svg';
import escudo8 from '../utils/escudos/almendros.svg';
import escudo9 from '../utils/escudos/uceda.svg';

// Array con imágenes y nombres de los ayuntamientos
const shields = [
  { src: escudo1, name: 'Buendía' },
  { src: escudo2, name: 'Aranzueque' },
  { src: escudo3, name: 'Renera' },
  { src: escudo4, name: 'Villar de Domingo García' },
  { src: escudo5, name: 'Pozorrubio de Santiago' },
  { src: escudo6, name: 'Horche' },
  { src: escudo7, name: 'Atienza' },
  { src: escudo8, name: 'Almendros' },
  { src: escudo9, name: 'Uceda' },
];

const Slider = () => {
  const [offset, setOffset] = useState(0);

  // Configuración del slider
  const visibleImages = 5; // Número de imágenes visibles
  const imageWidth = 100; // Ancho de cada imagen (en píxeles)
  const spacing = 180; // Espaciado entre imágenes
  const totalWidth = imageWidth + spacing; // Ancho total por imagen con espaciado

  // Bucle infinito de escudos para efecto continuo
  const infiniteShields = [...shields, ...shields];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % shields.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        width: '100%', // Se asegura que ocupe el 100% del ancho de la pantalla
      }}
    >
      {/* Contenedor del slider */}
      <div
        className="flex items-center transition-transform duration-700"
        style={{
          transform: `translateX(-${offset * totalWidth}px)`,
        }}
      >
        {infiniteShields.map((shield, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center text-center"
            style={{
              width: `${imageWidth}px`,
              marginRight: `${spacing}px`,
              marginLeft: index === 0 ? '100px' : '0', // Agregar margen izquierdo a la primera imagen
            }}
          >
            {/* Contenedor del escudo */}
            <div className="flex items-center justify-center h-32">
              <img
                src={shield.src}
                alt={`escudo-${shield.name}`}
                className="w-3/4 h-auto object-contain rounded-lg"
              />
            </div>

            {/* Contenedor del texto con altura fija */}
            <div className="mt-4 flex items-center justify-center min-h-[56px]">
              <p className="text-sm text-gray-700 font-bold leading-tight">
                {shield.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
