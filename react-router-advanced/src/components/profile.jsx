import { Outlet, NavLink } from "react-router-dom"
import { useAuth } from "../context/auth-context"


export default function Profile() {
  const { user } = useAuth()

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="card profile-card">
        <h2 className="profile-welcome">Welcome, {user.username}!</h2>
        <p className="profile-description">This is a protected route that requires authentication.</p>

        <div className="profile-tabs">
          <NavLink to="/profile" end className={({ isActive }) => (isActive ? "profile-tab active" : "profile-tab")}>
            Profile Details
          </NavLink>
          <NavLink
            to="/profile/settings"
            className={({ isActive }) => (isActive ? "profile-tab active" : "profile-tab")}
          >
            Settings
          </NavLink>
        </div>

        {/* Nested route content will be rendered here */}
        <Outlet />
      </div>
    </div>
  )
}

