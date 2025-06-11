import React from 'react';
import CommunityMap from '../components/CommunityMap';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Cursos SEPE</h1>
        <nav className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:underline transition-all duration-200">Inicio</Link>
          <Link to="/cursos" className="hover:underline transition-all duration-200">Cursos</Link>
          <Link to="/blog" className="hover:underline transition-all duration-200">Blog</Link>
          <Link to="/sobre-nosotros" className="hover:underline transition-all duration-200">Sobre Nosotros</Link>
          <Link to="/contacto" className="hover:underline transition-all duration-200">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}