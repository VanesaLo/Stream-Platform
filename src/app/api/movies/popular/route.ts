import { NextResponse } from 'next/server'
import { MovieResponse } from '@/types/movie'

const BASE_URL = 'https://api.themoviedb.org/3'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'

    const res = await fetch(
      `${BASE_URL}/movie/popular?page=${page}&language=es-ES`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.TMDB_API_KEY}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch movies')
    }

    const data: MovieResponse = await res.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('[MOVIES_POPULAR]', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

