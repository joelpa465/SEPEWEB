import React from 'react';
import CommunityMap from '../components/CommunityMap';

export default function FAQItem({ question, children }) {
  return (
    <details className="border p-4 rounded shadow-sm bg-white">
      <summary className="font-semibold cursor-pointer list-none select-none">{question}</summary>
      <p className="mt-2 text-gray-700">{children}</p>
    </details>
  );
}