"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/auth-context"


export default function Login() {
  const [username, setUsername] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Get the page the user was trying to visit
  const from = location.state?.from || "/"

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      login(username)
      // Redirect to the page they were trying to visit
      navigate(from, { replace: true })
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <div className="card login-card">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Enter any username"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary login-btn">
            Login
          </button>
        </form>
        <p className="login-note">This is a demo login. Enter any username to proceed.</p>
      </div>
    </div>
  )
}

