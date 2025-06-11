import React from 'react';
import Seo from '../components/Seo';
import CommunityMap from '../components/CommunityMap';

export default function AboutUs() {
  return (
    <>
      <Seo
        title="Sobre Nosotros"
        description="Conoce quién está detrás de Cursos SEPE. Nuestra misión es ayudarte a encontrar oportunidades formativas gratuitas del SEPE."
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introducción */}
        <section className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Somos un equipo apasionado por la educación y el empleo. Nuestra misión es ayudarte a encontrar oportunidades formativas gratuitas del SEPE y mejorar tus posibilidades laborales.
          </p>
        </section>

        {/* Nuestra Misión */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
          <p className="text-gray-700 mb-4">
            En <strong>Cursos SEPE</strong>, creemos firmemente en el poder de la formación como herramienta para el cambio personal y profesional. Por eso, creamos esta guía completa sobre los cursos del Servicio Público de Empleo Estatal.
          </p>
          <p className="text-gray-700">
            Queremos facilitar el acceso a la formación gratuita y ayudarte a tomar decisiones informadas sobre tu futuro laboral.
          </p>
        </section>

        {/* Nuestro Equipo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Miembro 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://placehold.co/300x300/93c9d3/ffffff?text=Equipo+1"
                alt="Miembro del equipo"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Laura Martínez</h3>
              <p className="text-gray-600">Directora de Contenido</p>
              <p className="mt-3 text-sm text-gray-500">
                Especialista en formación online y análisis de recursos educativos del SEPE.
              </p>
            </div>

            {/* Miembro 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://placehold.co/300x300/93c9d3/ffffff?text=Equipo+2"
                alt="Miembro del equipo"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Carlos Domínguez</h3>
              <p className="text-gray-600">Desarrollador Web</p>
              <p className="mt-3 text-sm text-gray-500">
                Apasionado del desarrollo frontend y la accesibilidad digital.
              </p>
            </div>

            {/* Miembro 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://placehold.co/300x300/93c9d3/ffffff?text=Equipo+3"
                alt="Miembro del equipo"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Ana López</h3>
              <p className="text-gray-600">SEO & Marketing Digital</p>
              <p className="mt-3 text-sm text-gray-500">
                Enamorada del posicionamiento web y la visibilidad orgánica en buscadores.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Nuestros Valores</h2>
          <ul className="space-y-4 text-gray-700 list-disc pl-5">
            <li><strong>Transparencia:</strong> Toda nuestra información es verificable y actualizada.</li>
            <li><strong>Profesionalismo:</strong> Trabajamos con rigor y dedicación en cada artículo y guía.</li>
            <li><strong>Accesibilidad:</strong> Creemos que la formación debe ser accesible para todos.</li>
            <li><strong>Innovación:</strong> Buscamos siempre nuevas formas de ayudarte a mejorar profesionalmente.</li>
          </ul>
        </section>

        {/* Llamada a la acción */}
        <section className="text-center py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">¿Quieres colaborar con nosotros?</h2>
          <p className="mb-6 max-w-lg mx-auto">
            Si tienes experiencia en formación, SEO o quieres compartir conocimiento, estamos abiertos a colaboraciones.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Contáctanos
          </a>
        </section>
      </div>
    </>
  );
}