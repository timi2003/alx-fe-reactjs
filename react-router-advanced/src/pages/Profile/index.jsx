import { Outlet, NavLink } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="page profile-page">
      <h1>User Profile</h1>
      <div className="profile-header">
        <div className="avatar">{user?.name?.charAt(0) || "U"}</div>
        <div className="user-info">
          <h2>{user?.name || "User"}</h2>
          <p>{user?.email || "No email provided"}</p>
        </div>
      </div>

      <div className="profile-navigation">
        <NavLink
          to="/profile/details"
          className={({ isActive }) => (isActive ? "profile-nav-link active" : "profile-nav-link")}
        >
          Profile Details
        </NavLink>
        <NavLink
          to="/profile/settings"
          className={({ isActive }) => (isActive ? "profile-nav-link active" : "profile-nav-link")}
        >
          Settings
        </NavLink>
      </div>

      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  )
}

export default Profile

