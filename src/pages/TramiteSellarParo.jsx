import React from 'react';
import TopicPageTemplate from '../components/TopicPageTemplate';

export default function TramiteSellarParo() {
  const title = "Cómo Sellar el Paro Online | Actualización 2025";
  const description = "Guía paso a paso sobre cómo sellar el paro online desde casa.";
  
  const content = `
    <p>El trámite de sellar el paro es obligatorio si quieres mantener tu derecho al subsidio o prestación por desempleo.</p>

    <h2 class="text-2xl font-bold mt-6 mb-3">Opciones para sellar el paro</h2>
    <ul class="list-disc ml-5 space-y-2">
      <li><strong>Online:</strong> En el portal del SEPE</li>
      <li><strong>Presencial:</strong> En oficinas de empleo</li>
      <li><strong>Por teléfono:</strong> Si tienes dificultades técnicas</li>
    </ul>

    <h2 class="text-2xl font-bold mt-6 mb-3">Pasos para sellar el paro online</h2>
    <ol class="list-decimal ml-5 space-y-2">
      <li>Inicia sesión en el portal del SEPE</li>
      <li>Selecciona la opción “Sellar el paro”</li>
      <li>Confirma tus datos y realiza el trámite</li>
      <li>Imprime el documento de confirmación</li>
    </ol>
  `;

  return (
    <TopicPageTemplate title={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </TopicPageTemplate>
  );
}