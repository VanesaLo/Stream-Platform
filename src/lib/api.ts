const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export const getImageUrl = (path: string, size: string = 'w500') => 
  path ? `${IMAGE_BASE_URL}/${size}${path}` : '/placeholder.svg'

export async function fetchMovies(page: number = 1) {
  const res = await fetch(`/api/movies/popular?page=${page}`)
  if (!res.ok) throw new Error('Failed to fetch movies')
  return res.json()
}

export async function fetchMovieDetails(id: string) {
  const res = await fetch(`/api/movies/${id}`)
  if (!res.ok) throw new Error('Failed to fetch movie details')
  return res.json()
}

export async function searchMovies(query: string, page: number = 1) {
  const res = await fetch(`/api/movies/search?query=${encodeURIComponent(query)}&page=${page}`)
  if (!res.ok) throw new Error('Failed to search movies')
  return res.json()
}

