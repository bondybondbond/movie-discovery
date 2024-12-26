import dynamic from 'next/dynamic'

const MovieFeed = dynamic(() => import('../components/MovieFeed'), {
  ssr: false
})

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto">
        <MovieFeed />
      </div>
    </div>
  );
}