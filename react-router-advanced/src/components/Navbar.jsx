"use client"

import { NavLink } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <div className="nav-brand">React Router Advanced</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
                Profile
              </NavLink>
            </li>
            <li>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar

