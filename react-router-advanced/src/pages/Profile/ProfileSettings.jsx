"use client"

import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"

const ProfileSettings = () => {
  const { user, login } = useAuth()
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: user?.bio || "",
  })
  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Update user data (in a real app, this would be an API call)
    const updatedUser = {
      ...user,
      ...formData,
    }

    // Update context
    login(updatedUser)

    // Show success message
    setMessage({ type: "success", text: "Profile updated successfully!" })

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  return (
    <div className="profile-settings">
      <h2>Profile Settings</h2>

      {message && <div className={`message ${message.type}`}>{message.text}</div>}

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows="4"></textarea>
        </div>

        <button type="submit" className="save-btn">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default ProfileSettings

