import { NextResponse } from 'next/server'
import { MovieResponse } from '@/types/movie'

const BASE_URL = 'https://api.themoviedb.org/3'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const page = searchParams.get('page') || '1'

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      )
    }

    const res = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}&language=es-ES`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.TMDB_API_KEY}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!res.ok) {
      throw new Error('Failed to search movies')
    }

    const data: MovieResponse = await res.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('[MOVIES_SEARCH]', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

