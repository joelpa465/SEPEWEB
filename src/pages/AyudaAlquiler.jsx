import React from 'react';
import TopicPageTemplate from '../components/TopicPageTemplate';

export default function AyudaAlquiler() {
  const title = "Ayudas al Alquiler 2025 | Cómo obtenerlas";
  const description = "Todo sobre las ayudas al alquiler en 2025: requisitos, plazos y cómo aplicar.";

  const content = `
    <p>Las ayudas al alquiler están diseñadas para familias con escasos recursos económicos que pagan su vivienda habitual.</p>

    <h2 class="text-2xl font-bold mt-6 mb-3">¿Quién puede optar?</h2>
    <ul class="list-disc ml-5 space-y-2">
      <li>Ingresos familiares inferiores al IPREM</li>
      <li>Haber residido en España al menos 5 años</li>
      <li>No poseer inmuebles ni ahorros significativos</li>
    </ul>

    <h2 class="text-2xl font-bold mt-6 mb-3">Documentación requerida</h2>
    <ul class="list-disc ml-5 space-y-2">
      <li>Solicitud firmada</li>
      <li>Modelo 145 actualizado</li>
      <li>Contrato de arrendamiento vigente</li>
      <li>Copia del DNI</li>
      <li>Recibo bancario donde se demuestre el pago del alquiler</li>
    </ul>
  `;

  return (
    <TopicPageTemplate title={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </TopicPageTemplate>
  );
}