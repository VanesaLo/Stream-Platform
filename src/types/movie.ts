export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
  vote_average: number
  genre_ids: number[]
}

export interface MovieResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Cast {
  id: number
  name: string
  character: string
  profile_path: string | null
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[]
  videos: {
    results: {
      key: string
      site: string
      type: string
    }[]
  }
  credits: {
    cast: Cast[]
  }
}

