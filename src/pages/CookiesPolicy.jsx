import React from 'react';
import Seo from '../components/Seo';

export default function CookiesPolicy() {
  return (
    <>
      <Seo
        title="Política de Cookies"
        description="Información sobre el uso de cookies en wepcursosepe.es según la normativa LSSI y RGPD."
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar una página web. Ayudan a mejorar la experiencia del usuario y a analizar el tráfico web.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Tipos de cookies utilizadas</h2>
          <p className="mb-2"><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento básico del sitio.</p>
          <p className="mb-2"><strong>Cookies de análisis:</strong> Para medir y analizar el uso del sitio (por ejemplo, con Google Analytics).</p>
          <p><strong>Cookies de terceros:</strong> Pueden ser usadas por servicios como redes sociales o anuncios (como Google AdSense).</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Consentimiento</h2>
          <p>Al navegar por este sitio y continuar utilizando sus servicios, aceptas el uso de cookies tal y como se describe en esta política.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Gestión de cookies</h2>
          <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de tu navegador:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li><a href="https://support.google.com/chrome"  target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configurar cookies en Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/products/firefox/cookies"  target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configurar cookies en Firefox</a></li>
            <li><a href="https://support.microsoft.com/es-es/microsoft-edge"  target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configurar cookies en Edge</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Desactivación de cookies</h2>
          <p>Si prefieres desactivar todas las cookies, puedes hacerlo desde tu navegador. Sin embargo, algunas funciones del sitio pueden dejar de funcionar correctamente.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Modificaciones</h2>
          <p>Nos reservamos el derecho a actualizar esta política en cualquier momento. Te recomendamos revisar esta página periódicamente para estar informado de cualquier cambio.</p>
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