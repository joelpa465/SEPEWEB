import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
import CookieConsent from './components/CookieConsent';
import ExternalScripts from './components/ExternalScripts';
import Breadcrumbs from '../components/Breadcrumbs';

// Páginas
const Home = React.lazy(() => import('./pages/Home'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const CoursesList = React.lazy(() => import('./pages/CoursesList'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Contact = React.lazy(() => import('./pages/Contact'));
const LegalNotice = React.lazy(() => import('./pages/LegalNotice'));
const CookiesPolicy = React.lazy(() => import('./pages/CookiesPolicy'));
const CookieSettings = React.lazy(() => import('./pages/CookieSettings'));
const CursosMadrid = React.lazy(() => import('./pages/CursosMadrid'));
const AyudaMadresSolteras = React.lazy(() => import('./pages/AyudaMadresSolteras'));
const PensionNoContributiva = React.lazy(() => import('./pages/PensionNoContributiva'));
const SubsidioMayores45 = React.lazy(() => import('./pages/SubsidioMayores45'));
const MasterSEO = React.lazy(() => import('./pages/MasterSEO'));
const TramiteSellarParo = React.lazy(() => import('./pages/TramiteSellarParo'));
const AyudaAlquiler = React.lazy(() => import('./pages/AyudaAlquiler'));


// Componentes
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));


export default function App() {
  return (
    <Router>
      <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
        {/* Header */}
        <React.Suspense fallback={<HeaderLoader />}>
          <Header />
        </React.Suspense>

        {/* Main Content */}
        <main className="flex-grow">
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/cursos" element={<CoursesList />} />
              <Route path="/sobre-nosotros" element={<AboutUs />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/aviso-legal" element={<LegalNotice />} />
              <Route path="/politica-de-cookies" element={<CookiesPolicy />} /> 
              <Route path="/configuracion-cookies" element={<CookieSettings />} />
              <Route path="/cursos/madrid" element={<CursosMadrid />} />
              <Route path="/ayudas/madres-solteras" element={<AyudaMadresSolteras />} />
            </Routes>
          </React.Suspense>
        </main>

        {/* Footer */}
        <React.Suspense fallback={null}>
          <Footer />
        </React.Suspense>
      </div>
    </Router>
  );
}

// --- COMPONENTES LOADER ---

function HeaderLoader() {
  return <header className="bg-blue-600 h-16 animate-pulse"></header>;
}

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-4">
      <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
    </div>
  );
}