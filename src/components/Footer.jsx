import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información del sitio */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Cursos SEPE</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Guía completa sobre cursos gratuitos del Servicio Público de Empleo Estatal. 
              Tu puerta de entrada a nuevas oportunidades laborales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Cursos Disponibles
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/politica-de-privacidad" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Cursos SEPE | Todos los derechos reservados</p>
          <p className="mt-2">
            Esta web no es afiliada oficialmente al SEPE o cualquier institución pública.
          </p>
        </div>
      </div>
    </footer>
  );
}