import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getImageUrl } from "@/lib/api";
import type { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="overflow-hidden transition-transform hover:scale-105">
        <div className="aspect-[2/3] relative">
          <Image
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
          <p className="text-sm text-muted-foreground">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
