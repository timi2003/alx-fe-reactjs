"use client"

import { Outlet, NavLink } from "react-router-dom"
import { useAuth } from "../context/auth-context"


export default function Layout() {
  const { user, logout } = useAuth()

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="container header-container">
          <h1 className="app-title">React Router Advanced</h1>
          <nav className="nav-menu">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Blog
            </NavLink>
            {user ? (
              <>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                  Profile
                </NavLink>
                <button onClick={logout} className="nav-link">
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Login
              </NavLink>
            )}
          </nav>
        </div>
      </header>
      <main className="app-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="app-footer">
        <div className="container">React Router Advanced Demo</div>
      </footer>
    </div>
  )
}

