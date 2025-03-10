import React from "react"

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to React Router Advanced</h1>
      <div className="card features-card">
        <h2 className="features-title">Features Demonstrated:</h2>
        <ul className="features-list">
          <li>Basic routing with React Router v6</li>
          <li>Nested routes (check the Profile section)</li>
          <li>Protected routes requiring authentication</li>
          <li>Dynamic routes with URL parameters (Blog posts)</li>
          <li>404 page handling</li>
        </ul>
      </div>
    </div>
  )
}

