"use client";

import { MovieGrid } from "@/components/movie-grid";
import { useFavorites } from "@/hooks/use-favorites";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-3xl font-bold">Favoritos</h1>
      <MovieGrid movies={favorites} />
    </div>
  );
}
