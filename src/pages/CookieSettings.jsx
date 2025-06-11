import React, { useState, useEffect } from 'react';
import Seo from '../components/Seo';

export default function CookieSettings() {
  const [settings, setSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Cargar configuración guardada
  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(settings));
    localStorage.setItem('cookieConsent', 'custom');
    alert('Preferencias guardadas correctamente.');
  };

  return (
    <>
      <Seo
        title="Configuración de Cookies"
        description="Personaliza tu consentimiento sobre el uso de cookies en wepcursosepe.es."
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Configuración de Cookies</h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Aquí puedes gestionar tus preferencias sobre el uso de cookies en este sitio web. 
          Puedes aceptar todas las cookies pulsando "Aceptar todas", o personalizarlas aquí.
        </p>

        {/* Tipos de cookies */}
        <section className="space-y-6">
          {/* Cookies esenciales */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Cookies esenciales</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Necesarias para el funcionamiento básico del sitio.
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.essential}
                  disabled
                  className="form-checkbox h-5 w-5 text-blue-600 bg-gray-200 dark:bg-gray-700 dark:text-blue-400 rounded focus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          {/* Cookies analíticas */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Cookies de análisis</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Para medir y analizar el tráfico web (ej: Google Analytics).
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="analytics"
                  checked={settings.analytics}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-purple-600 dark:text-purple-400 rounded focus:ring-purple-500"
                />
              </label>
            </div>
          </div>

          {/* Cookies de marketing */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Cookies de marketing</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Utilizadas para mostrar anuncios relevantes (ej: Google AdSense).
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="marketing"
                  checked={settings.marketing}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-green-600 dark:text-green-400 rounded focus:ring-green-500"
                />
              </label>
            </div>
          </div>

          {/* Cookies de preferencias */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-lg">Cookies de preferencias</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Guarda tus preferencias como idioma, región, etc.
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="preferences"
                  checked={settings.preferences}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-yellow-600 dark:text-yellow-400 rounded focus:ring-yellow-500"
                />
              </label>
            </div>
          </div>
        </section>

        {/* Botones de acción */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
          >
            Guardar preferencias
          </button>
          <button
            onClick={() => {
              setSettings({
                essential: true,
                analytics: true,
                marketing: true,
                preferences: true,
              });
              localStorage.setItem('cookiePreferences', '{"essential":true,"analytics":true,"marketing":true,"preferences":true}');
              localStorage.setItem('cookieConsent', 'accepted');
              alert('Todas las cookies activadas.');
            }}
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
          >
            Aceptar todas
          </button>
          <button
            onClick={() => {
              setSettings({
                essential: true,
                analytics: false,
                marketing: false,
                preferences: false,
              });
              localStorage.setItem('cookiePreferences', '{"essential":true,"analytics":false,"marketing":false,"preferences":false}');
              localStorage.setItem('cookieConsent', 'rejected');
              alert('Solo se permiten cookies esenciales.');
            }}
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
          >
            Rechazar no esenciales
          </button>
        </div>

        {/* Información adicional */}
        <section className="mt-10 bg-blue-50 dark:bg-gray-800 p-5 rounded-md">
          <h2 className="text-xl font-semibold mb-3">¿Qué son estas cookies?</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Cookies esenciales:</strong> Son necesarias para que la web funcione correctamente.</li>
            <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo los usuarios interactúan con el sitio.</li>
            <li><strong>Cookies de marketing:</strong> Se utilizan para mostrarte anuncios relevantes.</li>
            <li><strong>Cookies de preferencias:</strong> Recuerdan tus ajustes, como región o tema claro/oscuro.</li>
          </ul>
        </section>

        {/* Enlace a política de cookies */}
        <div className="mt-8 text-center">
          <Link to="/politica-de-cookies" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            → Volver a la Política de Cookies
          </Link>
        </div>
      </div>
    </>
  );
}