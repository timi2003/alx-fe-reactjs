import { Link } from "react-router-dom"


export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">Page Not Found</h2>
      <p className="not-found-message">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary home-btn">
        Go Home
      </Link>
    </div>
  )
}

