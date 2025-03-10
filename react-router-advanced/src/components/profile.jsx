import { useAuth } from "../context/auth-context"

/**
 * Profile component that can be used throughout the application
 * This is a more reusable version of the Profile page component
 */
export default function Profile({ showSettings = false }) {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="profile-container">
        <div className="card profile-card">
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-component">
      <div className="profile-header">
        <div className="profile-avatar">{user.username.charAt(0).toUpperCase()}</div>
        <div className="profile-info">
          <h3 className="profile-name">{user.username}</h3>
          <p className="profile-status">
            <span className="status-indicator"></span>
            <span className="status-text">Active</span>
          </p>
        </div>
      </div>

      {showSettings && (
        <div className="profile-actions">
          <button className="btn btn-secondary">Edit Profile</button>
        </div>
      )}
    </div>
  )
}

