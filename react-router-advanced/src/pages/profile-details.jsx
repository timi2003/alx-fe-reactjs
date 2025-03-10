import { useAuth } from "../context/auth-context"


export default function ProfileDetails() {
  const { user } = useAuth()

  return (
    <div className="profile-section">
      <h3 className="profile-section-title">Profile Details</h3>
      <div className="profile-details">
        <div className="profile-detail">
          <span className="profile-label">Username:</span> {user.username}
        </div>
        <div className="profile-detail">
          <span className="profile-label">Member Since:</span> {new Date().toLocaleDateString()}
        </div>
        <div className="profile-detail">
          <span className="profile-label">Status:</span> <span className="text-success">Active</span>
        </div>
      </div>
    </div>
  )
}

