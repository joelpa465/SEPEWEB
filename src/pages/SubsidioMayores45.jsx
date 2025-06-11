import React from 'react';
import TopicPageTemplate from '../components/TopicPageTemplate';

export default function SubsidioMayores45() {
  const title = "Subsidio Mayores de 45 Años | Guía SEPE 2025";
  const description = "Descubre cómo acceder al subsidio para personas mayores de 45 años sin derecho a prestación.";

  const content = `
    <p>El subsidio para personas mayores de 45 años es una ayuda económica destinada a quienes no tienen derecho a prestación contributiva.</p>

    <h2 class="text-2xl font-bold mt-6 mb-3">Requisitos</h2>
    <ul class="list-disc ml-5 space-y-2">
      <li>Tener más de 45 años</li>
      <li>No tener derecho a otra prestación</li>
      <li>No haber agotado la protección por desempleo</li>
      <li>No estar cobrando otro subsidio</li>
    </ul>

    <h2 class="text-2xl font-bold mt-6 mb-3">Documentación necesaria</h2>
    <p>Deberás presentar:</p>
    <ul class="list-disc ml-5 space-y-2">
      <li>Solicitud oficial</li>
      <li>DNI/NIE</li>
      <li>Documento de situación laboral</li>
      <li>Certificado de empadronamiento</li>
    </ul>
  `;

  return (
    <TopicPageTemplate title={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </TopicPageTemplate>
  );
}