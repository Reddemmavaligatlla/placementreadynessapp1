import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { signIn, authLoading, error } = useAuth()
  const [form, setForm] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signIn(form.username, form.password)
  }

  return (
    <div className="login-screen">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In to Kodflix</h2>
        {error && <div className="error-message">{error}</div>}
           <input
          type="text"
          name="username"
          placeholder="Username / Email / Mobile"
          value={form.username}
          onChange={handleChange}
          disabled={authLoading}
          className="form-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          disabled={authLoading}
          className="form-input"
          required
        />
        <button type="submit" className="btn-submit" disabled={authLoading}>
          {authLoading ? <span className="spinner"></span> : 'Login'}
        </button>
      </form>
    </div>
  )
}