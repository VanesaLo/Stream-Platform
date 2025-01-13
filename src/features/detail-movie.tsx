"use client";

import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MovieDetails } from "@/components/movie-details";
import { fetchMovieDetails } from "@/lib/api";
import { handleApiError } from "@/lib/error";

type Props = {
  id: string;
};

export default function MovieDetail({ id }: Props) {
  const {
    data: movie,
    error,
    isError,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => (id ? fetchMovieDetails(id) : Promise.reject()),
    enabled: !!id,
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
