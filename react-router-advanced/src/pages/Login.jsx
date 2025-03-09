"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Get the page they were trying to access before being redirected to login
  const from = location.state?.from?.pathname || "/profile"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    // Simple validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields")
      return
    }

    // For demo purposes, any email/password combination works
    // In a real app, you would validate against a backend
    const userData = {
      name: formData.email.split("@")[0], // Use part of email as name for demo
      email: formData.email,
      joinDate: new Date().toLocaleDateString(),
      bio: "This is a demo user account.",
    }

    // Log the user in
    login(userData)

    // Navigate to the page they were trying to access
    navigate(from, { replace: true })
  }

  return (
    <div className="page login-page">
      <h1>Login</h1>
      <p>Please log in to access your profile and protected content.</p>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <div className="login-note">
        <p>
          <strong>Note:</strong> For this demo, any email and password will work.
        </p>
      </div>
    </div>
  )
}

export default Login

