import React, { useEffect } from 'react';
import CookieManager from '../utils/cookieManager';

export default function ExternalScripts() {
  useEffect(() => {
    // Inicializa scripts basados en consentimiento
    CookieManager.initScripts();

    // Opcional: escuchar cambios en tiempo real
    const handleCookieChange = () => {
      CookieManager.initScripts();
    };

    CookieManager.listenForConsentChanges(handleCookieChange);

    return () => {
      window.removeEventListener('cookieConsentAccepted', handleCookieChange);
      window.removeEventListener('cookieConsentRejected', handleCookieChange);
    };
  }, []);

  return null; // Este componente no renderiza UI
}