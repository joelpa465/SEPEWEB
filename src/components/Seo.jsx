import React from 'react';
import { Helmet } from 'react-helmet';

export default function Seo({ title, description, image, url }) {
  const siteTitle = "Cursos SEPE | Guía Gratuita";
  const metaDescription = description || "Encuentra información actualizada sobre cursos gratuitos del Servicio Público de Empleo Estatal.";
  const metaImage = image || "https://placehold.co/1200x630/93c9d3/ffffff?text=Cursos+SEPE";
  const canonicalUrl = url ? `https://wepcursosepe.es${url}` : "https://wepcursosepe.es/";

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@tu_usuario" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
}