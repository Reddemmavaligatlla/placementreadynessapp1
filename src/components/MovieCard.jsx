import React from 'react'

export default function MovieCard({ movie }){
  const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'
  return (
    <div className="card">
      <img src={poster} alt={movie.Title} className="card-image" />
      <div className="card-overlay">
        <div className="card-title">{movie.Title}</div>
      </div>
    </div>
  )
}
