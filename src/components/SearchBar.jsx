import React from 'react';
import CommunityMap from '../components/CommunityMap';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Buscar cursos, artículos..."
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        aria-label="Buscar contenido"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 absolute left-3 top-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}