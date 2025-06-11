import React from 'react';

export default function PrivacyPolicyLink() {
  return (
    <p className="text-sm text-gray-600 mt-2">
      Al suscribirte, aceptas nuestra{' '}
      <a href="/politica-de-privacidad" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
        Política de Privacidad
      </a>, donde explicamos cómo tratamos tus datos.
    </p>
  );
}