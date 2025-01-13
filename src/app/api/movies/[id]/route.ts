import { NextResponse } from "next/server";
import { MovieDetails } from "@/types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const res = await fetch(
      `${BASE_URL}/movie/${id}?append_to_response=videos,credits&language=es-ES`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data: MovieDetails = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("[MOVIE_DETAILS]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
