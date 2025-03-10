import React from "react"

export default function ProfileSettings() {
  return (
    <div className="profile-section">
      <h3 className="profile-section-title">Profile Settings</h3>
      <form className="profile-settings-form">
        <div className="form-group">
          <label htmlFor="email">Email Notifications</label>
          <select id="email" className="form-control" defaultValue="all">
            <option value="all">All notifications</option>
            <option value="important">Important only</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-check">
            <input type="checkbox" defaultChecked />
            <span>Enable two-factor authentication</span>
          </label>
        </div>
        <div className="form-group">
          <label className="form-check">
            <input type="checkbox" defaultChecked />
            <span>Make profile public</span>
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          Save Settings
        </button>
      </form>
    </div>
  )
}

