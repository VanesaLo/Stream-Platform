"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MovieDetails } from "@/components/movie-details";
import { fetchMovieDetails } from "@/lib/api";
import { handleApiError } from "@/lib/error";

export default function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [movieId, setMovieId] = useState<string | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setMovieId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  const {
    data: movie,
    error,
    isError,
  } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => (movieId ? fetchMovieDetails(movieId) : Promise.reject()),
    enabled: !!movieId,
  });

  if (isError) {
    return (
      <div className="container py-8">
        <Alert variant="destructive">
          <AlertDescription>{handleApiError(error)}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!movie) return null;

  return <MovieDetails movie={movie} />;
}
