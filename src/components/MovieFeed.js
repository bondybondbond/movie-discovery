'use client';

import { useState } from 'react';
import MovieCard from './MovieCard';
import Onboarding from './Onboarding';
import { DUMMY_MOVIES } from '../app/data';

export default function MovieFeed() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [preferences, setPreferences] = useState(null);

  const handleOnboardingComplete = (prefs) => {
    setPreferences(prefs);
    setOnboardingComplete(true);
  };

  if (!onboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      {DUMMY_MOVIES.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
      ))}
    </div>
  );
}