import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookieConsentAccepted'));
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookieConsentRejected'));
  };

  const handleCustomize = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg z-50 p-4 md:p-6 animate-fadeIn">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 max-w-xl">
          <p className="text-sm md:text-base">
            Este sitio web utiliza cookies para mejorar la experiencia del usuario. 
            Puedes aceptar todas las cookies o gestionar tus preferencias.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:justify-end">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleAccept}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
            >
              Aceptar todas
            </button>
            <button
              onClick={handleReject}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded transition-colors duration-300"
            >
              Solo esenciales
            </button>
            <Link
              to="/configuracion-cookies"
              onClick={handleCustomize}
              className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center gap-1"
            >
              Gestionar cookies
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="text-right mt-2 sm:mt-0">
            <Link
              to="/politica-de-cookies"
              className="hover:underline text-xs text-blue-600 dark:text-blue-400"
            >
              Leer más sobre cookies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

