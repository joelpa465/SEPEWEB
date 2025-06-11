import React from 'react';
import Seo from './Seo';

export default function TopicPageTemplate({ title, description, children }) {
  return (
    <>
      <Seo title={title} description={description} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <div className="prose prose-blue max-w-none">
          {children}
        </div>
      </div>
    </>
  );
}