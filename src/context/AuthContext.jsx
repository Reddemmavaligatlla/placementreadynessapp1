import React, { createContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { auth } from '../firebase'

export const AuthContext = createContext()

// Demo/Mock user database (stored in localStorage)
const DEMO_DB_KEY = 'netflix_demo_users'

function getDemoUsers() {
  try {
    const data = localStorage.getItem(DEMO_DB_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

function saveDemoUsers(users) {
  try {
    localStorage.setItem(DEMO_DB_KEY, JSON.stringify(users))
  } catch (err) {
    console.error('Failed to save to localStorage:', err)
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // load user from localStorage
    const saved = localStorage.getItem('kodflix_user')
    if (saved) {
      try {
        setUser(JSON.parse(saved))
      } catch {
        setUser(null)
      }
    }
    setLoading(false)
  }, [])

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePassword = (password) => {
    return password.length >= 6
  }

  const signUp = async () => {
    // not supported in this simplified flow
    return { success: false }
  }

  const signIn = async (identifier, password) => {
    setError('')
    setAuthLoading(true)
    await new Promise(r => setTimeout(r, 500))
    try {
      if (!identifier) {
        throw new Error('Username / email / mobile required')
      }
      if (!password) {
        throw new Error('Password required')
      }
      // simply accept any identifier
      const user = { identifier }
      setUser(user)
      localStorage.setItem('kodflix_user', JSON.stringify(user))
      return { success: true }
    } catch (err) {
      const msg = err.message || 'Login failed'
      setError(msg)
      return { success: false, error: msg }
    } finally {
      setAuthLoading(false)
    }
  }

  const logout = async () => {
    setError('')
    localStorage.removeItem('kodflix_user')
    setUser(null)
  }

  const value = {
    user,
    loading,
    authLoading,
    error,
    signIn,
    signUp,
    logout,
    setError
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = React.useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
