import React from 'react';

export default function CommunityMap({ onRegionSelect }) {
  const handleRegionClick = (region) => {
    if (onRegionSelect) {
      onRegionSelect(region);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        className="w-full h-auto"
        aria-label="Mapa interactivo de comunidades autónomas de España"
      >
        {/* Galicia */}
        <path
          d="M100,50 L150,70 L160,120 L110,130 Z"
          className="fill-blue-300 hover:fill-blue-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Galicia')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Galicia"
        />
        {/* Asturias */}
        <path
          d="M160,100 L190,90 L200,120 L160,130 Z"
          className="fill-green-300 hover:fill-green-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Asturias')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Asturias"
        />
        {/* Cantabria */}
        <path
          d="M200,100 L230,90 L240,120 L210,130 Z"
          className="fill-yellow-300 hover:fill-yellow-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Cantabria')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Cantabria"
        />
        {/* País Vasco */}
        <path
          d="240,100 L270,90 L280,120 L250,130 Z"
          className="fill-red-300 hover:fill-red-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('País Vasco')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar País Vasco"
        />
        {/* Cataluña */}
        <path
          d="300,150 L330,140 L340,170 L310,180 Z"
          className="fill-purple-300 hover:fill-purple-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Cataluña')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Cataluña"
        />
        {/* Madrid */}
        <path
          d="250,250 L280,270 L260,300 L230,280 Z"
          className="fill-pink-300 hover:fill-pink-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Madrid')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Madrid"
        />
        {/* Andalucía */}
        <path
          d="150,400 L300,450 L280,500 L130,470 Z"
          className="fill-orange-300 hover:fill-orange-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Andalucía')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Andalucía"
        />
        {/* Valencia */}
        <path
          d="320,300 L360,310 L350,350 L310,340 Z"
          className="fill-teal-300 hover:fill-teal-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Valencia')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Comunidad Valenciana"
        />
        {/* Aragón */}
        <path
          d="270,200 L300,190 L310,230 L280,240 Z"
          className="fill-indigo-300 hover:fill-indigo-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Aragón')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Aragón"
        />
        {/* Castilla y León */}
        <path
          d="180,150 L230,160 L220,200 L170,190 Z"
          className="fill-gray-300 hover:fill-gray-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Castilla y León')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Castilla y León"
        />
        {/* Extremadura */}
        <path
          d="200,350 L230,360 L220,400 L190,390 Z"
          className="fill-emerald-300 hover:fill-emerald-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleRegionClick('Extremadura')}
          tabIndex="0"
          role="button"
          aria-label="Seleccionar Extremadura"
        />

        {/* Etiqueta de región ejemplo */}
        <text x="150" y="60" fontSize="12" fontWeight="bold" fill="#333">Galicia</text>
        <text x="190" y="110" fontSize="12" fontWeight="bold" fill="#333">Asturias</text>
        <text x="220" y="110" fontSize="12" fontWeight="bold" fill="#333">Cantabria</text>
        <text x="260" y="110" fontSize="12" fontWeight="bold" fill="#333">País Vasco</text>
        <text x="310" y="160" fontSize="12" fontWeight="bold" fill="#333">Cataluña</text>
        <text x="260" y="260" fontSize="12" fontWeight="bold" fill="#333">Madrid</text>
        <text x="200" y="360" fontSize="12" fontWeight="bold" fill="#333">Extremadura</text>
        <text x="330" y="310" fontSize="12" fontWeight="bold" fill="#333">Valencia</text>
        <text x="280" y="210" fontSize="12" fontWeight="bold" fill="#333">Aragón</text>
        <text x="190" y="170" fontSize="12" fontWeight="bold" fill="#333">Castilla y León</text>
      </svg>

      <p className="text-center mt-4 text-sm text-gray-500">
        Haz clic en una región para ver los cursos disponibles.
      </p>
    </div>
  );
}