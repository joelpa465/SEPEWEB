import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const translateBreadcrumb = (segment) => {
    const translations = {
      'cursos': 'Cursos',
      'madrid': 'Madrid',
      'barcelona': 'Barcelona',
      'sevilla': 'Sevilla',
      'malaga': 'Málaga',
      'ayudas': 'Ayudas',
      'madres-solteras': 'Madres Solteras',
      'alquiler': 'Ayuda Alquiler',
      'mayores-45': 'Mayores de 45 años',
      'pensiones': 'Pensiones',
      'no-contributiva': 'No Contributiva',
      'masters': 'Másters',
      'seo': 'SEO',
      'tramites': 'Trámites',
      'sellar-paro': 'Sellar Paro',
      'blog': 'Blog',
      'contacto': 'Contacto',
      'aviso-legal': 'Aviso Legal',
      'politica-de-cookies': 'Política de Cookies',
      'configuracion-cookies': 'Configuración de Cookies'
    };
    return translations[segment] || capitalize(segment.replace(/-/g, ' '));
  };

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <li>
          <a href="/" className="hover:text-blue-600 transition-colors">Inicio</a>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={name}>
              <li className="text-gray-400">&rsaquo;</li>
              <li>
                {isLast ? (
                  <span className="text-blue-700 font-medium">{translateBreadcrumb(name)}</span>
                ) : (
                  <a 
                    href={routeTo} 
                    className="hover:text-blue-600 transition-colors"
                  >
                    {translateBreadcrumb(name)}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}