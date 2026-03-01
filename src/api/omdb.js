const API_KEY = '7a4b4120'
const BASE = 'https://www.omdbapi.com/'

export async function searchMovies(query, page = 1) {
  const url = `${BASE}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=${page}`
  const res = await fetch(url)
  return res.json()
}

export async function getMovieById(imdbID) {
  const url = `${BASE}?apikey=${API_KEY}&i=${encodeURIComponent(imdbID)}&plot=full`;
  const res = await fetch(url)
  return res.json()
}
