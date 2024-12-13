'use client';
import React, { useState } from 'react';
import { Tv, Film } from 'lucide-react';

const STREAMING_SERVICES = [
  { id: 'netflix', name: 'Netflix' },
  { id: 'prime', name: 'Prime Video' },
  { id: 'bbc', name: 'BBC iPlayer' },
  { id: 'itv', name: 'ITVX' },
  { id: 'channel4', name: 'Channel 4' }
];

const GENRES = [
  'Action', 'Comedy', 'Drama', 'Horror', 'Documentary'
];

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleComplete = () => {
    onComplete({ services: selectedServices, genre: selectedGenre });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        {step === 1 ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Which streaming services do you have?</h2>
            <div className="grid grid-cols-1 gap-3">
              {STREAMING_SERVICES.map(service => (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedServices(prev => 
                      prev.includes(service.id)
                        ? prev.filter(id => id !== service.id)
                        : [...prev, service.id]
                    );
                  }}
                  className={`p-4 rounded-lg border flex items-center gap-3 transition-colors
                    ${selectedServices.includes(service.id)
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-gray-200 text-gray-700 hover:border-blue-200'}`}
                >
                  <Tv className={selectedServices.includes(service.id) ? 'text-blue-500' : 'text-gray-400'} />
                  <span className="font-medium">{service.name}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={selectedServices.length === 0}
              className="w-full py-4 bg-blue-500 text-white font-semibold rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">What are you in the mood for?</h2>
            <div className="grid grid-cols-1 gap-3">
              {GENRES.map(genre => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`p-4 rounded-lg border flex items-center gap-3 transition-colors
                    ${selectedGenre === genre
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-gray-200 text-gray-700 hover:border-blue-200'}`}
                >
                  <Film className={selectedGenre === genre ? 'text-blue-500' : 'text-gray-400'} />
                  <span className="font-medium">{genre}</span>
                </button>
              ))}
            </div>
            <button
              onClick={handleComplete}
              disabled={!selectedGenre}
              className="w-full py-4 bg-blue-500 text-white font-semibold rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Start Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;