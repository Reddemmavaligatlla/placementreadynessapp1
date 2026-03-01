import React from 'react'
import MovieCard from './MovieCard'

export default function Row({ title, movies }){
  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-cards">
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>
    </section>
  )
}
