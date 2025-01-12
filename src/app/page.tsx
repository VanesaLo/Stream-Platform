"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MovieGrid } from "@/components/movie-grid";
import { fetchMovies } from "@/lib/api";
import { handleApiError } from "@/lib/error";

export default function HomePage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isError,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => fetchMovies(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="container py-8 space-y-6 justify-center">
      <h1 className="text-3xl font-bold">Películas populares</h1>
      {isError ? (
        <Alert variant="destructive">
          <AlertDescription>{handleApiError(error)}</AlertDescription>
        </Alert>
      ) : (
        <MovieGrid
          movies={movies}
          onLoadMore={() => fetchNextPage()}
          hasMore={hasNextPage && !isFetchingNextPage}
        />
      )}
    </div>
  );
}
