import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function PrivateWrapper({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="loading-screen">Loading...</div>
  }

  return (
    <div className={!user ? 'content-blur' : ''}>
      {children}
    </div>
  )
}
