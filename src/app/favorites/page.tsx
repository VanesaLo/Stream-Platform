import Favorites from "@/features/favorites";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis Favoritos | Movie Streaming",
  description:
    "Guarda y gestiona tus películas favoritas para verlas cuando quieras en nuestra plataforma de streaming.",
  keywords: ["favoritos", "películas", "streaming", "cine"],
  openGraph: {
    title: "Mis Favoritos | Movie Streaming",
    description:
      "Guarda y gestiona tus películas favoritas para verlas cuando quieras en nuestra plataforma de streaming.",
    siteName: "Movie Streaming",
    type: "website",
  },
};

export default function FavoritesPage() {
  return <Favorites />;
}
