import { MovieCard } from "@/components/movie-card";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";

interface MovieGridProps {
  movies: Movie[];
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export function MovieGrid({ movies, onLoadMore, hasMore }: MovieGridProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {hasMore && onLoadMore && (
        <div className="flex justify-center">
          <Button onClick={onLoadMore}>Cargar más</Button>
        </div>
      )}
    </div>
  );
}
