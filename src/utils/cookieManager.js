// src/utils/cookieManager.js
import React from 'react';

const CookieManager = {
  // Verifica si se ha aceptado el tipo de cookie específico
  hasAccepted(category) {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') return true;
    if (consent === 'rejected') return false;

    // Si hay configuración personalizada
    try {
      const preferences = JSON.parse(localStorage.getItem('cookiePreferences'));
      return preferences?.[category] || false;
    } catch (e) {
      return false;
    }
  },

  // Inicializa los scripts según consentimiento
  initScripts() {
    const analyticsAllowed = this.hasAccepted('analytics');
    const marketingAllowed = this.hasAccepted('marketing');

    // Ejemplo: solo inicia GA si se permiten cookies analíticas
    if (analyticsAllowed) {
      console.log('[Cookies] Iniciando Google Analytics...');
      // Aquí iría tu código de GA o herramientas similares
    }

    if (marketingAllowed) {
      console.log('[Cookies] Iniciando Google AdSense...');
      // Aquí cargarías anuncios si están permitidos
    }
  },

  // Escucha eventos de consentimiento global
  listenForConsentChanges(callback = () => {}) {
    window.addEventListener('cookieConsentAccepted', () => {
      console.log('Usuario aceptó todas las cookies.');
      this.initScripts();
      callback();
    });

    window.addEventListener('cookieConsentRejected', () => {
      console.log('Usuario rechazó cookies no esenciales.');
      this.initScripts();
      callback();
    });
  },
};

export default CookieManager;