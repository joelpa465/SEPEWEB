import React from 'react';
import CourseCard from '../components/CourseCard';
import FAQItem from '../components/FAQItem';
import NewsletterForm from '../components/NewsletterForm';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Seo
        title="Cursos SEPE | Guía Completa"
        description="Encuentra información actualizada sobre cursos gratuitos del Servicio Público de Empleo Estatal. Incluye ayudas, trámites, subsidios, pensiones y másters."
      />

      {/* Hero Section */}
      <ScrollReveal animation="fade-up" delay={200}>
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4 rounded-b-3xl shadow-lg text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Guía Completa sobre los Cursos del SEPE
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Encuentra formación gratuita, cómo inscribirte, tipos de cursos y preguntas frecuentes.
          </p>
          <a
            href="#tipos"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Ver Tipos de Cursos
          </a>
        </section>
      </ScrollReveal>

      {/* Navegación por categorías */}
      <ScrollReveal animation="fade-up" delay={300}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Temas destacados del SEPE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cita Previa */}
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-3">Cita Previa</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/cita-previa/sepe" className="text-blue-600 hover:underline">Cita previa INEM (SEPE)</a></li>
                <li><a href="/cita-previa/anular" className="text-blue-600 hover:underline">Anular cita previa INEM</a></li>
                <li><a href="/cita-previa/ss" className="text-blue-600 hover:underline">Cita previa Seguridad Social</a></li>
                <li><a href="/cita-previa/extranjeria" className="text-blue-600 hover:underline">Cita previa Extranjería</a></li>
              </ul>
            </div>

            {/* Cursos por CCAA */}
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <h3 className="font-semibold text-lg mb-3">Cursos por Región</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/cursos/madrid" className="text-blue-600 hover:underline">Cursos SEPE Madrid</a></li>
                <li><a href="/cursos/barcelona" className="text-blue-600 hover:underline">Cursos SEPE Barcelona</a></li>
                <li><a href="/cursos/sevilla" className="text-blue-600 hover:underline">Cursos SEPE Sevilla</a></li>
                <li><a href="/cursos/malaga" className="text-blue-600 hover:underline">Cursos SEPE Málaga</a></li>
              </ul>
            </div>

            {/* Ayudas SEPE */}
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-3">Ayudas SEPE</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/ayudas/imv" className="text-blue-600 hover:underline">Ingreso Mínimo Vital</a></li>
                <li><a href="/ayudas/madres-solteras" className="text-blue-600 hover:underline">Ayudas para madres solteras</a></li>
                <li><a href="/ayudas/discapacidad" className="text-blue-600 hover:underline">Ayudas para personas con discapacidad</a></li>
                <li><a href="/ayudas/alquiler" className="text-blue-600 hover:underline">Ayudas al alquiler</a></li>
              </ul>
            </div>

            {/* Subsidios */}
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
              <h3 className="font-semibold text-lg mb-3">Subsidios</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/subsidios/desempleo" className="text-blue-600 hover:underline">Por desempleo</a></li>
                <li><a href="/subsidios/mayores-45" className="text-blue-600 hover:underline">Mayores de 45 años</a></li>
                <li><a href="/subsidios/cotizacion" className="text-blue-600 hover:underline">Insuficiencia de cotización</a></li>
                <li><a href="/subsidios/mayores-52" className="text-blue-600 hover:underline">Mayores de 52 años</a></li>
              </ul>
            </div>

            {/* Pensiones */}
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
              <h3 className="font-semibold text-lg mb-3">Pensiones</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/pensiones/no-contributiva" className="text-blue-600 hover:underline">Pensión no contributiva</a></li>
                <li><a href="/pensiones/orfandad" className="text-blue-600 hover:underline">Pensión de orfandad</a></li>
                <li><a href="/pensiones/viudedad" className="text-blue-600 hover:underline">Pensión de viudedad</a></li>
                <li><a href="/pensiones/jubilacion-maxima" className="text-blue-600 hover:underline">Jubilación máxima</a></li>
              </ul>
            </div>

            {/* Másters */}
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
              <h3 className="font-semibold text-lg mb-3">Másters</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/masters/seo" className="text-blue-600 hover:underline">Máster SEO</a></li>
                <li><a href="/masters/marketing-digital" className="text-blue-600 hover:underline">Marketing Digital</a></li>
                <li><a href="/masters/inteligencia-artificial" className="text-blue-600 hover:underline">Inteligencia Artificial</a></li>
                <li><a href="/masters/youtube" className="text-blue-600 hover:underline">Gestión de YouTube</a></li>
              </ul>
            </div>

            {/* Trámites SEPE */}
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-pink-500">
              <h3 className="font-semibold text-lg mb-3">Trámites SEPE</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/tramites/sellar-paro" className="text-blue-600 hover:underline">Sellar paro</a></li>
                <li><a href="/tramites/apuntarse-paro" className="text-blue-600 hover:underline">Apuntarse al paro</a></li>
                <li><a href="/tramites/inss" className="text-blue-600 hover:underline">INSS</a></li>
                <li><a href="/tramites/tgss" className="text-blue-600 hover:underline">TGSS</a></li>
              </ul>
            </div>

            {/* Fiscal */}
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500">
              <h3 className="font-semibold text-lg mb-3">Fiscal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/fiscal/certificado-penales" className="text-blue-600 hover:underline">Certificado de penales</a></li>
                <li><a href="/fiscal/modelo-600" className="text-blue-600 hover:underline">Modelo 600</a></li>
                <li><a href="/fiscal/modelo-145" className="text-blue-600 hover:underline">Modelo 145</a></li>
                <li><a href="/fiscal/modelo-036" className="text-blue-600 hover:underline">Modelo 036</a></li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ¿Qué son los cursos del SEPE? */}
      <ScrollReveal animation="fade-up" delay={400}>
        <section id="que-es" className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400/93c9d3/ffffff?text=Cursos+SEPE"
                alt="Cursos del SEPE"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">¿Qué son los cursos del SEPE?</h2>
              <p className="mb-4">
                Los cursos del SEPE (Servicio Público de Empleo Estatal) son programas formativos diseñados para mejorar las oportunidades laborales de los ciudadanos españoles.
              </p>
              <p>
                Ofrecen formación gratuita en diversas áreas profesionales y están destinados principalmente a personas desempleadas o en riesgo de exclusión social.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Tipos de Cursos */}
      <ScrollReveal animation="fade-up" delay={500}>
        <section id="tipos" className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Tipos de Cursos del SEPE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CourseCard
              title="Formación Profesional Básica"
              description="Dirigidos a personas sin titulación previa. Ideal para principiantes."
            />
            <CourseCard
              title="Especialización Profesional"
              description="Mejora competencias en sectores específicos como informática, salud o construcción."
            />
            <CourseCard
              title="Bonificados por Empresas"
              description="Cursos financiados por empresas para sus empleados."
            />
            <CourseCard
              title="Para Personas Desempleadas"
              description="Cursos gratuitos subvencionados por el SEPE, accesibles si cumples los requisitos."
            />
          </div>
        </section>
      </ScrollReveal>

      {/* Cómo Inscribirse */}
      <ScrollReveal animation="fade-up" delay={600}>
        <section className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Cómo Inscribirte en un Curso del SEPE</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li><strong>Inicia sesión:</strong> Accede al portal oficial del SEPE (<a href="https://www.sepe.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.sepe.es</a>) con tus credenciales.</li>
            <li><strong>Busca cursos:</strong> Filtra los cursos según tu perfil, región y área de interés.</li>
            <li><strong>Llena el formulario:</strong> Rellena los datos personales y profesionales requeridos.</li>
            <li><strong>Espera confirmación:</strong> Recibirás notificación por email cuando se confirme tu plaza.</li>
          </ol>
        </section>
      </ScrollReveal>

      {/* Preguntas Frecuentes */}
      <ScrollReveal animation="fade-up" delay={700}>
        <section id="faq" className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <FAQItem question="¿Son todos los cursos del SEPE gratuitos?">
              Sí, gran parte de los cursos son gratuitos, especialmente para personas desempleadas. Algunos pueden tener coste si no cumples los requisitos necesarios.
            </FAQItem>
            <FAQItem question="¿Puedo hacer cursos del SEPE si estoy trabajando?">
              Sí, existen cursos bonificados que pueden realizar empleados mediante la empresa. También hay cursos de especialización para personas activas.
            </FAQItem>
            <FAQItem question="¿Cómo puedo saber cuántas plazas quedan disponibles?">
              Accede al portal del SEPE y filtra los cursos por región y disponibilidad. Siempre se recomienda apuntarse lo antes posible.
            </FAQItem>
          </div>
        </section>
      </ScrollReveal>

      {/* Google AdSense Placeholder */}
      <ScrollReveal animation="fade-up" delay={800}>
        <section className="my-10 text-center">
          <div className="adsbygoogle"
               style={{ display: 'block', margin: '0 auto' }}
               data-ad-format="auto"
               data-full-width-responsive="true"></div>
        </section>
      </ScrollReveal>

      {/* Newsletter */}
      <ScrollReveal animation="fade-up" delay={900}>
        <section className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Recibe novedades y nuevos cursos</h2>
          <p className="mb-6 text-gray-600">
            Suscríbete a nuestro boletín y sé el primero en conocer nuevas ofertas formativas del SEPE.
          </p>
          <NewsletterForm />
        </section>
      </ScrollReveal>
    </>
  );
}