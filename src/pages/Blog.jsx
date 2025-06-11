import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

// Mock de artículos del blog (simulamos datos reales)
const blogPosts = [
  {
    id: 1,
    title: "Cómo elegir el mejor curso SEPE según tu perfil profesional",
    excerpt: "Descubre cómo identificar los cursos del SEPE más adecuados para ti en función de tus habilidades y objetivos laborales.",
    date: "10 de abril de 2025",
    readTime: "6 min",
    category: "Guías",
    image: "https://placehold.co/800x450/93c9d3/ffffff?text=SEPE+Blog"
  },
  {
    id: 2,
    title: "Cursos SEPE en Madrid: Plazas disponibles y cómo inscribirte",
    excerpt: "Listado actualizado de los cursos del SEPE en Madrid con información sobre requisitos, fechas y proceso de inscripción.",
    date: "8 de abril de 2025",
    readTime: "5 min",
    category: "Regiones",
    image: "https://placehold.co/800x450/93c9d3/ffffff?text=Madrid+Cursos"
  },
  {
    id: 3,
    title: "Los 10 mejores cursos del SEPE para mejorar tu empleabilidad",
    excerpt: "Una selección de los cursos más demandados del SEPE que te pueden ayudar a encontrar trabajo más rápido.",
    date: "5 de abril de 2025",
    readTime: "7 min",
    category: "Top",
    image: "https://placehold.co/800x450/93c9d3/ffffff?text=Top+Cursos"
  }
];

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog de Cursos SEPE"
        description="Artículos útiles, guías completas y consejos sobre formación gratuita del Servicio Público de Empleo Estatal."
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog de Cursos SEPE</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl">
          Artículos útiles, guías completas y consejos sobre formación gratuita del Servicio Público de Empleo Estatal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="text-sm text-blue-600 font-semibold mb-1">{post.category}</div>
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime} lectura</span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-block text-blue-600 hover:underline font-medium"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}