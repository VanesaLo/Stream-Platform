"use client";

import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { MovieGrid } from "@/components/movie-grid";
import { searchMovies } from "@/lib/api";
import { handleApiError } from "@/lib/error";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchMovie() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    // Update the URL when the query changes
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (query) {
      newSearchParams.set("query", query);
    } else {
      newSearchParams.delete("query");
    }
    router.push(`/search?${newSearchParams.toString()}`, { scroll: false });
  }, [query, router, searchParams]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    isError,
  } = useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam = 1 }) => searchMovies(query, pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    enabled: query.length > 0,
    initialPageParam: 1,
  });

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="container py-8 space-y-6">
      <Input
        type="search"
        placeholder="Ingresa el nombre de la película en la barra de búsqueda"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-xl mx-auto"
      />
      {isError ? (
        <Alert variant="destructive">
          <AlertDescription>{handleApiError(error)}</AlertDescription>
        </Alert>
      ) : query ? (
        isLoading ? (
          <div className="text-center">Buscando...</div>
        ) : movies.length > 0 ? (
          <MovieGrid
            movies={movies}
            onLoadMore={() => fetchNextPage()}
            hasMore={hasNextPage && !isFetchingNextPage}
          />
        ) : (
          <div className="text-center">Sin resultados</div>
        )
      ) : (
        <div className="text-center text-muted-foreground">
          Ingresa el nombre de la película en la barra de búsqueda
        </div>
      )}
    </div>
  );
}
