'use client';
import React, { useState } from 'react';
import { Play, Star } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const [expanded, setExpanded] = useState(false);
  const [showingTrailer, setShowingTrailer] = useState(false);

  return (
    <div className="mb-8 bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <div className="aspect-[2/3] relative">
          <img
            src="/api/placeholder/400/600"
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-black bg-opacity-75 px-3 py-1.5 rounded-full">
            <Star size={16} className="text-yellow-400" />
            <span className="text-white font-bold text-sm">{movie.imdbScore}</span>
          </div>

          {movie.hasTrailer && !showingTrailer && (
            <button 
              onClick={() => setShowingTrailer(true)}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-200"
            >
              <div className="bg-white bg-opacity-10 p-4 rounded-full">
                <Play className="w-12 h-12 text-white" />
              </div>
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{movie.title}</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {movie.year}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {movie.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <p className={`text-gray-600 leading-relaxed ${!expanded && 'line-clamp-2'}`}>
            {movie.synopsis}
          </p>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        </div>

        {expanded && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Cast</h3>
            <p className="text-gray-600">{movie.cast.join(', ')}</p>
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        <button 
          onClick={() => alert(`Taking you to ${movie.service}...`)}
          className="w-full py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Watch now on {movie.service}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;