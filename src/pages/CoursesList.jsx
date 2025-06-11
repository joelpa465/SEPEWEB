import React from 'react';
import { useState } from 'react';
import Seo from '../components/Seo';

// Datos simulados de cursos del SEPE
const mockCourses = [
  {
    id: 1,
    title: "Gestión de Redes Sociales",
    description: "Aprende a crear estrategias de marketing digital efectivas.",
    region: "Madrid",
    area: "Marketing",
    mode: "Online",
    date: "Inicio: 15 mayo 2025",
    link: "#"
  },
  {
    id: 2,
    title: "Programación Web Full Stack",
    description: "Formación completa en desarrollo web frontend y backend.",
    region: "Barcelona",
    area: "Tecnología",
    mode: "Presencial",
    date: "Inicio: 20 mayo 2025",
    link: "#"
  },
  {
    id: 3,
    title: "Gestión de Recursos Humanos",
    description: "Domina las herramientas clave para la selección de personal y gestión laboral.",
    region: "Valencia",
    area: "Administración",
    mode: "Online",
    date: "Inicio: 10 junio 2025",
    link: "#"
  },
  {
    id: 4,
    title: "Diseño Gráfico Profesional",
    description: "Aprende Photoshop, Illustrator y diseño UX/UI.",
    region: "Sevilla",
    area: "Arte y Diseño",
    mode: "Mixto",
    date: "Inicio: 25 mayo 2025",
    link: "#"
  },
  {
    id: 5,
    title: "Inglés Técnico",
    description: "Mejora tu nivel de inglés enfocado a entornos profesionales.",
    region: "Madrid",
    area: "Idiomas",
    mode: "Online",
    date: "Inicio: 18 mayo 2025",
    link: "#"
  }
];

// Opciones de filtro
const regions = ["Todas", "Madrid", "Barcelona", "Valencia", "Sevilla"];
const areas = ["Todas", "Marketing", "Tecnología", "Administración", "Arte y Diseño", "Idiomas"];
const modes = ["Todas", "Online", "Presencial", "Mixto"];

export default function CoursesList() {
  const [filters, setFilters] = useState({
    region: "Todas",
    area: "Todas",
    mode: "Todas"
  });

  // Filtrar cursos según los filtros seleccionados
  const filteredCourses = mockCourses.filter(course => {
    return (
      (filters.region === "Todas" || course.region === filters.region) &&
      (filters.area === "Todas" || course.area === filters.area) &&
      (filters.mode === "Todas" || course.mode === filters.mode)
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Seo
        title="Cursos del SEPE Disponibles"
        description="Encuentra cursos gratuitos del SEPE por región, área profesional y modalidad. Listado actualizado y fácil de filtrar."
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Cursos del SEPE Disponibles</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Encuentra cursos gratuitos del Servicio Público de Empleo Estatal por región, área profesional o modalidad.
        </p>

        {/* Filtros */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Región</label>
            <select
              id="region"
              name="region"
              value={filters.region}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {regions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Área profesional</label>
            <select
              id="area"
              name="area"
              value={filters.area}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {areas.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="mode" className="block text-sm font-medium text-gray-700 mb-1">Modalidad</label>
            <select
              id="mode"
              name="mode"
              value={filters.mode}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {modes.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{course.region}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{course.area}</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">{course.mode}</span>
                  </div>
                  <p className="text-sm text-gray-500">{course.date}</p>
                </div>
                <div className="p-5 pt-0 mt-auto">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    Ver detalles
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700">No hay cursos que coincidan con estos filtros.</h3>
              <button
                onClick={() => setFilters({ region: "Todas", area: "Todas", mode: "Todas" })}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}