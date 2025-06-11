import React from 'react';
import TopicPageTemplate from '../components/TopicPageTemplate';

export default function CursosMadrid() {
  const title = "Cursos SEPE Madrid | Plazas disponibles 2025";
  const description = "Encuentra cursos gratuitos del SEPE en Madrid. Plazas disponibles, cómo inscribirte y fechas de inicio.";

  const content = `
    <p>Madrid es una de las comunidades autónomas con más ofertas formativas del Servicio Público de Empleo Estatal (SEPE). 
    Si resides en la Comunidad de Madrid, tienes múltiples oportunidades para mejorar tu currículum y acceder a nuevas salidas profesionales.</p>

    <h2 class="text-2xl font-bold mt-6 mb-3">¿Dónde encontrar cursos del SEPE en Madrid?</h2>
    <p>La forma más directa es accediendo al portal oficial del SEPE (<a href="https://www.sepe.es"  target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">www.sepe.es</a>) e introduciendo “Madrid” como filtro geográfico.</p>

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

    <h2 class="text-2xl font-bold mt-6 mb-3">Recursos útiles</h2>
    <ul class="list-disc ml-5 space-y-2">
      <li><a href="https://www.sepe.es"  target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Portal del SEPE</a></li>
      <li><a href="/contacto" class="text-blue-600 underline">Contáctanos si necesitas ayuda</a></li>
      <li><a href="/blog" class="text-blue-600 underline">Blog de artículos útiles</a></li>
    </ul>
  `;

  return (
    <TopicPageTemplate title={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </TopicPageTemplate>
  );
}