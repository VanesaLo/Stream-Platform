import { Metadata } from "next";
import SearchMovie from "@/features/search";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Buscar Películas | Movie Streaming",
  description:
    "Busca películas por título, género o director en nuestra plataforma de streaming.",
  keywords: ["buscar películas", "streaming", "géneros", "cine"],
  openGraph: {
    title: "Buscar Películas | Movie Streaming",
    description:
      "Busca películas por título, género o director en nuestra plataforma de streaming.",
    siteName: "Movie Streaming",
    type: "website",
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SearchMovie />
    </Suspense>
  );
}
