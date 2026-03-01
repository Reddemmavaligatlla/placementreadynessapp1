import React, { useEffect, useState } from 'react'
import { searchMovies } from './api/omdb'
import { AuthProvider, useAuth } from './context/AuthContext'
import PrivateWrapper from './components/PrivateWrapper'
import Header from './components/Header'
import Hero from './components/Hero'
import Row from './components/Row'
import LoginPage from './components/LoginPage'

const categories = [
  { title: 'Featured', query: 'Avengers' },
  { title: 'Trending Now', query: 'Batman' },
  { title: 'Action Movies', query: 'Action' },
  { title: 'Comedies', query: 'Comedy' },
  { title: 'Sci-Fi', query: 'Star Wars' }
]

function MainContent() {
  const [data, setData] = useState({})
  const [heroMovie, setHeroMovie] = useState(null)
  const { user } = useAuth()

  useEffect(() => {
    async function load() {
      const out = {}
      for (const cat of categories) {
        try {
          const res = await searchMovies(cat.query)
          out[cat.title] = res?.Search || []
        } catch (err) {
          out[cat.title] = []
        }
      }
      setData(out)
      const first = out[categories[0].title]
      if (first && first.length) setHeroMovie(first[0])
    }
    load()
  }, [])

  return (
    <div className="app-root">
      <Header />
      {user && <div className="welcome-banner">Welcome to Kodnest application</div>}
      <PrivateWrapper>
        <Hero movie={heroMovie} />
        <main className="rows">
          {categories.map((c) => (
            <Row key={c.title} title={c.title} movies={data[c.title] || []} />
          ))}
        </main>
      </PrivateWrapper>
    </div>
  )
}

export default function App() {
  const { user, loading } = useAuth()
  if (loading) return <div className="loading-screen">Loading...</div>
  return user ? <MainContent /> : <LoginPage />
}

// wrap outer with provider separately in index

