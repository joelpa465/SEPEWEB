import React from 'react';
import TopicPageTemplate from '../components/TopicPageTemplate';

export default function AyudaMadresSolteras() {
  const title = "Ayudas para Madres Solteras 2025 | Guía Completa";
  const description = "Descubre las ayudas y subsidios del SEPE para madres solteras en 2025. Cómo aplicar y requisitos.";
  const content = `
    <p>Las madres solteras pueden beneficiarse de distintas ayudas sociales y económicas ofrecidas por el SEPE y otras instituciones públicas. 
    En esta guía te explicamos qué opciones existen y cómo solicitarlas.</p>

    <h2 class="text-2xl font-bold mt-6 mb-3">¿Qué ayudas existen?</h2>
    <ul class="list-disc ml-5 space-y-2">
      <li>Ayuda familiar por hijo a cargo</li>
      <li>Subsidio por desempleo para cuidado infantil</li>
      <li>Pensión compensatoria en casos de divorcio</li>
      <li>Ayudas al alquiler para familias monoparentales</li>
    </ul>

    <h2 class="text-2xl font-bold mt-6 mb-3">Cómo solicitar estas ayudas</h2>
    <ol class="list-decimal ml-5 space-y-2">
      <li>Accede al portal del SEPE o a la web de tu comunidad autónoma.</li>
      <li>Busca programas destinados a familias monoparentales o grupos vulnerables.</li>
      <li>Completa el formulario con tus datos personales y situación laboral.</li>
      <li>Adjunta documentación requerida (certificado de empadronamiento, libro de familia, etc.)</li>
      <li>Espera resolución por parte del organismo responsable.</li>
    </ol>

    <h2 class="text-2xl font-bold mt-6 mb-3">Consejos clave</h2>
    <p>Es recomendable:</p>
    <ul class="list-disc ml-5 space-y-2">
      <li>Solicitar ayuda cuanto antes</li>
      <li>Consultar también en los servicios sociales locales</li>
      <li>Verificar actualizaciones anuales en convocatorias públicas</li>
    </ul>
  `;

  return (
    <TopicPageTemplate title={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </TopicPageTemplate>
  );
}