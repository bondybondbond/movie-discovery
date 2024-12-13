import MovieFeed from '../components/MovieFeed';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto">
        {/* @ts-expect-error Server Component */}
        <MovieFeed />
      </div>
    </div>
  );
}