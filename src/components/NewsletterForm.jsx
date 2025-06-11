import React from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  const [status, setStatus] = React.useState({ loading: false, message: '', success: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !consent) {
      setStatus({ loading: false, message: 'Por favor, completa todos los campos.', success: false });
      return;
    }

    setStatus({ loading: true, message: 'Enviando...', success: null });

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, message: '¡Gracias por suscribirte!', success: true });
        setEmail('');
        setConsent(false);
      } else {
        setStatus({ loading: false, message: data.message || 'Hubo un error. Inténtalo más tarde.', success: false });
      }
    } catch (error) {
      setStatus({ loading: false, message: 'No pudimos conectar con el servidor.', success: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="email"
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
        required
      />
      <div className="text-sm text-left mt-2 sm:mt-0 sm:text-center">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={consent}
            onChange={() => setConsent(!consent)}
            className="rounded text-blue-600 focus:ring-blue-500"
            required
          />
          <span className="ml-2">
            Acepto la{' '}
            <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="underline">
              política de privacidad
            </a>
          </span>
        </label>
      </div>
      <button
        type="submit"
        disabled={status.loading}
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300 disabled:opacity-60"
      >
        {status.loading ? 'Guardando...' : 'Suscribirme'}
      </button>

      {status.message && (
        <p className={`mt-2 ${status.success ? 'text-green-600' : 'text-red-600'} text-center`}>
          {status.message}
        </p>
      )}
    </form>
  );
}