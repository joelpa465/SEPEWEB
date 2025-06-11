import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';

// Simulamos contenido dinámico basado en el ID del artículo
const blogPostData = {
  1: {
    title: "Cómo elegir el mejor curso SEPE según tu perfil profesional",
    content: `
      <p>El SEPE ofrece cientos de cursos formativos cada año destinados a personas desempleadas o en riesgo de exclusión social. Pero con tanta oferta, ¿cómo saber cuál es el curso ideal para ti?</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">1. Define tu objetivo laboral</h2>
      <p>Antes de apuntarte a cualquier curso, es fundamental que reflexiones sobre tu meta profesional. ¿Quieres cambiar de sector? ¿Mejorar habilidades en tu área actual? ¿Obtener un certificado oficial?</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">2. Analiza tus habilidades actuales</h2>
      <p>Haz una lista de tus competencias técnicas y blandas. Esto te ayudará a elegir un curso que complemente lo que ya sabes y no repitas temario.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">3. Consulta las ofertas por región</h2>
      <p>No todos los cursos están disponibles en todas las comunidades autónomas. Visita el portal del SEPE y filtra por tu ubicación para ver opciones cercanas.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">4. Revisa los requisitos de acceso</h2>
      <p>Cada curso tiene unos perfiles específicos. Algunos exigen titulación previa, otros experiencia laboral o estar inscrito como demandante de empleo.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">5. Evalúa la duración y formato</h2>
      <p>Existen cursos presenciales, online y mixtos. Asegúrate de que puedas asistir regularmente y cumplir con los plazos establecidos.</p>
    `,
    date: "10 de abril de 2025",
    readTime: "6 min",
    category: "Guías"
  },
  2: {
    title: "Cursos SEPE en Madrid: Plazas disponibles y cómo inscribirte",
    content: `
      <p>Madrid es una de las regiones con mayor número de ofertas formativas del SEPE. Si resides en esta comunidad, tienes muchas oportunidades para mejorar tu currículum y acceder a nuevas salidas profesionales.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">¿Dónde encontrar cursos en Madrid?</h2>
      <p>La forma más directa es accediendo al portal del SEPE (<a href="https://www.sepe.es"  target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">www.sepe.es</a>) e introduciendo “Madrid” como filtro geográfico.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">Requisitos comunes</h2>
      <ul class="list-disc ml-5 space-y-2">
        <li>Estar inscrito como demandante de empleo</li>
        <li>No haber participado anteriormente en el mismo curso</li>
        <li>Tener residencia legal en España</li>
        <li>Disponer de DNI electrónico o certificado digital</li>
      </ul>
      <h2 class="text-2xl font-bold mt-6 mb-3">Pasos para inscribirte</h2>
      <ol class="list-decimal ml-5 space-y-2">
        <li>Inicia sesión en el portal del SEPE</li>
        <li>Busca cursos en Madrid</li>
        <li>Selecciona uno que se ajuste a tu perfil</li>
        <li>Rellena el formulario de inscripción</li>
        <li>Espera confirmación por email</li>
      </ol>
    `,
    date: "8 de abril de 2025",
    readTime: "5 min",
    category: "Regiones"
  },
  3: {
    title: "Los 10 mejores cursos del SEPE para mejorar tu empleabilidad",
    content: `
      <p>Si quieres mejorar tu empleabilidad, estos son algunos de los cursos más recomendados ofrecidos por el SEPE:</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">1. Curso de Community Manager</h2>
      <p>Ideal para aprender gestión de redes sociales, marketing digital y posicionamiento web.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">2. Curso de Programación Web</h2>
      <p>Aprende HTML, CSS, JavaScript y desarrollo frontend con herramientas modernas.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">3. Curso de Gestión de Recursos Humanos</h2>
      <p>Formación completa en selección de personal, nóminas, contratos y legislación laboral.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">4. Curso de Marketing Digital</h2>
      <p>Aprovecha el crecimiento del comercio electrónico y prepárate para trabajar en agencias o empresas.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">5. Curso de Diseño Gráfico</h2>
      <p>Domina herramientas como Photoshop, Illustrator y aprende diseño UX/UI básico.</p>
    `,
    date: "5 de abril de 2025",
    readTime: "7 min",
    category: "Top"
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPostData[id];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
        <p className="text-gray-600">Lo sentimos, el artículo que buscas no existe.</p>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">Volver al blog</Link>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt || post.content.slice(0, 160)}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Volver al blog</Link>
        <div className="mb-4">
          <span className="text-blue-600 font-semibold">{post.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-6">
          Publicado el {post.date} • {post.readTime} lectura
        </div>
        <img src="https://placehold.co/800x450/93c9d3/ffffff?text=Blog+Image" alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <div
          className="prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
        <hr className="my-8 border-t border-gray-200" />
        <div className="text-center">
          <Link to="/blog" className="text-blue-600 hover:underline">← Volver al blog</Link>
        </div>
      </div>
    </>
  );
}