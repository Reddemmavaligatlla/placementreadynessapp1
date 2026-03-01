import React from 'react'

export default function Hero({ movie }){
  if (!movie) return (
    <section className="hero placeholder">
      <div className="hero-inner">
        <h1>Loading...</h1>
      </div>
    </section>
  )

  const bg = movie.Poster && movie.Poster !== 'N/A' ? `url(${movie.Poster})` : 'linear-gradient(90deg,#111,#333)'
  return (
    <section className="hero" style={{ backgroundImage: bg }}>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <h1 className="hero-title">{movie.Title}</h1>
        <p className="hero-meta">{movie.Year}</p>
        <div className="hero-actions">
          <button className="btn play">Play</button>
          <button className="btn more">More Info</button>
        </div>
      </div>
    </section>
  )
}
