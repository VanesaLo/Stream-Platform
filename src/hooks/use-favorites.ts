'use client'

import { useState, useEffect } from 'react'
import { Movie } from '@/types/movie'

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  const toggleFavorite = (movie: Movie) => {
    const newFavorites = favorites.some(f => f.id === movie.id)
      ? favorites.filter(f => f.id !== movie.id)
      : [...favorites, movie]
    
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const isFavorite = (id: number) => favorites.some(f => f.id === id)

  return { favorites, toggleFavorite, isFavorite }
}

