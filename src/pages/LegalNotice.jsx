import React from 'react';
import Seo from '../components/Seo';

export default function LegalNotice() {
  return (
    <>
      <Seo
        title="Aviso Legal"
        description="Aviso legal del sitio web wepcursosepe.es, conforme a la normativa vigente."
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Datos identificativos</h2>
          <p>El titular de este sitio web es:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li><strong>Nombre:</strong> Cursos SEPE</li>
            <li><strong>Email:</strong> contacto@wepcursosepe.es</li>
            <li><strong>Dominio:</strong> https://wepcursosepe.es</li> 
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Finalidad del sitio web</h2>
          <p>Este sitio tiene como finalidad informar sobre cursos gratuitos del Servicio Público de Empleo Estatal (SEPE), con el objetivo educativo y sin ánimo de lucro.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Condiciones de uso</h2>
          <p>El acceso y navegación por este sitio web implica la aceptación expresa y plena de las condiciones aquí descritas. El titular se reserva el derecho a modificar el contenido sin previo aviso.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Propiedad intelectual</h2>
          <p>Todos los contenidos del sitio (textos, imágenes, diseños) están protegidos por derechos de autor y propiedad intelectual. Queda prohibida su reproducción sin consentimiento explícito.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Enlaces externos</h2>
          <p>Este sitio puede contener enlaces a otras páginas web. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Responsabilidad</h2>
          <p>La información publicada en esta web tiene carácter informativo y no sustituye la información oficial del SEPE. No nos hacemos responsables de decisiones tomadas basadas en la información aquí mostrada.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Legislación aplicable</h2>
          <p>Este sitio se rige por la legislación española y europea aplicable, incluyendo:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Ley Orgánica de Protección de Datos (LOPD)</li>
            <li>Reglamento General de Protección de Datos (RGPD)</li>
            <li>Ley de Servicios de la Sociedad de la Información (LSSI)</li>
          </ul>
        </section>

        <section className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md dark:bg-gray-800 dark:border-blue-400">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </>
  );
}