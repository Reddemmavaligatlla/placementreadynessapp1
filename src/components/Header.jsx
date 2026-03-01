import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Header(){
  const { user, logout } = useAuth()

  return (
    <header className="site-header">
      <div className="brand">KODFLIX</div>
      <div className="nav">

        {user && (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </header>
  )
}
