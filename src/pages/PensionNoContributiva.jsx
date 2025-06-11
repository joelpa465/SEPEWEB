import React from 'react';
import TopicPageTemplate from '../components/TopicPageTemplate';

export default function PensionNoContributiva() {
  const title = "Pensión No Contributiva | Guía Completa 2025";
  const description = "¿Qué es la pensión no contributiva? Requisitos, cómo solicitarla y documentos necesarios.";
  
  const content = `
    <p>La pensión no contributiva es un beneficio económico otorgado por el Estado a personas que cumplen ciertos requisitos económicos y sociales.</p>

    <h2 class="text-2xl font-bold mt-6 mb-3">¿Quién puede solicitarla?</h2>
    <ul class="list-disc ml-5 space-y-2">
      <li>No haber cotizado lo suficiente</li>
      <li>Tener ingresos inferiores al umbral establecido</li>
      <li>Vivir en España legalmente</li>
    </ul>

    <h2 class="text-2xl font-bold mt-6 mb-3">Cómo solicitarla</h2>
    <ol class="list-decimal ml-5 space-y-2">
      <li>Accede a la web del Instituto Nacional de la Seguridad Social (INSS)</li>
      <li>Rellena el formulario correspondiente</li>
      <li>Adjunta documentación: DNI, certificado de empadronamiento, justificante de ingresos, etc.</li>
      <li>Espera resolución oficial</li>
    </ol>
  `;

  return (
    <TopicPageTemplate title={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </TopicPageTemplate>
  );
}