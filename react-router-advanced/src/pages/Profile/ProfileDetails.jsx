import { useAuth } from "../../contexts/AuthContext"

const ProfileDetails = () => {
  const { user } = useAuth()

  return (
    <div className="profile-details">
      <h2>Profile Details</h2>
      <div className="details-card">
        <div className="detail-item">
          <span className="detail-label">Name:</span>
          <span className="detail-value">{user?.name || "Not provided"}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Email:</span>
          <span className="detail-value">{user?.email || "Not provided"}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Member Since:</span>
          <span className="detail-value">{user?.joinDate || "Unknown"}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Bio:</span>
          <p className="detail-value bio">{user?.bio || "No bio provided"}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails

