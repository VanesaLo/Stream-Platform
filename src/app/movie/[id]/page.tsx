import MovieDetail from "@/features/detail-movie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalle Película | Movie Streaming",
  description:
    "Descubre más información sobre su género, director, actores principales y mucho más en nuestra plataforma de streaming.",
  keywords: ["buscar películas", "streaming", "géneros", "cine"],
  openGraph: {
    title: "Detalle Película | Movie Streaming",
    description:
      "Descubre más información sobre su género, director, actores principales y mucho más en nuestra plataforma de streaming.",
    siteName: "Movie Streaming",
    type: "website",
  },
};

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <MovieDetail id={id} />;
}
