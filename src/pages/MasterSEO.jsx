import React from 'react';
import TopicPageTemplate from '../components/TopicPageTemplate';

export default function MasterSEO() {
  const title = "Máster en SEO | Formación gratuita del SEPE";
  const description = "Aprende sobre másters en SEO disponibles mediante el SEPE y cómo inscribirte.";
  
  const content = `
    <p>El SEPE ofrece formación avanzada en marketing digital, incluyendo másters en SEO y posicionamiento web.</p>

    <h2 class="text-2xl font-bold mt-6 mb-3">¿Qué aprenderás?</h2>
    <ul class="list-disc ml-5 space-y-2">
      <li>Estrategias de posicionamiento orgánico</li>
      <li>Uso de herramientas como Google Analytics</li>
      <li>Optimización On-page y Off-page</li>
      <li>Análisis de keywords y competencia</li>
    </ul>

    <h2 class="text-2xl font-bold mt-6 mb-3">¿Cómo apuntarte?</h2>
    <p>Puedes encontrar estos cursos en el portal del SEPE (<a href="https://www.sepe.es"  target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">www.sepe.es</a>) filtrando por “Marketing Digital” o “SEO”.</p>
  `;

  return (
    <TopicPageTemplate title={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </TopicPageTemplate>
  );
}