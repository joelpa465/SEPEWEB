import React from 'react';
import Seo from '../components/Seo';

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Política de Privacidad"
        description="De acuerdo con la LOPD y RGPD, esta es nuestra política de privacidad sobre el tratamiento de datos personales."
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Responsable del tratamiento</h2>
          <p>El responsable del tratamiento de los datos personales recogidos en este sitio web es:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li><strong>Nombre:</strong> Cursos SEPE</li>
            <li><strong>Email:</strong> contacto@wepcursosepe.es</li>
            <li><strong>Finalidad:</strong> Gestión de suscripciones al boletín informativo.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Finalidad del tratamiento</h2>
          <p>Los datos personales (correo electrónico) se utilizan únicamente para:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Enviar información sobre cursos gratuitos del SEPE</li>
            <li>Notificar nuevas publicaciones del blog</li>
            <li>Mantener informados a los usuarios sobre novedades formativas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Legitimación del tratamiento</h2>
          <p>La base legal para el tratamiento de tus datos es tu consentimiento explícito, otorgado mediante el formulario de suscripción.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Derechos ARCO</h2>
          <p>Puedes ejercer tus derechos de acceso, rectificación, supresión u oposición escribiéndonos a:</p>
          <p className="mt-2 text-blue-600 underline"><a href="mailto:contacto@wepcursosepe.es">contacto@wepcursosepe.es</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Seguridad y confidencialidad</h2>
          <p>Nos comprometemos a garantizar la seguridad y protección de tus datos personales. Implementamos medidas técnicas y organizativas adecuadas para evitar el acceso no autorizado o el uso indebido de tus datos.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Cesión de datos a terceros</h2>
          <p>No cedemos tus datos a terceros sin tu consentimiento expreso. Solo se compartirán si es necesario por obligación legal o para cumplir con fines específicos que hayas aceptado.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Plataformas de envío de email</h2>
          <p>En caso de usar herramientas como Mailchimp, Brevo o similares, se aplicará su propia política de privacidad, pero siempre respetando los principios aquí establecidos.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">8. Duración del tratamiento</h2>
          <p>Tus datos se conservarán mientras estés suscrito. Puedes darte de baja en cualquier momento usando el enlace proporcionado en cada correo.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">9. Aceptación y consentimiento</h2>
          <p>Al suscribirte a nuestro boletín, confirmas haber leído y aceptado esta política de privacidad.</p>
        </section>

        <section className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
          <p className="text-sm text-gray-700">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </>
  );
}