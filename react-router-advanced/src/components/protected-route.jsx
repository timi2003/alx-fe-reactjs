import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/auth-context"

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // Redirect to login page but save the attempted URL
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return children
}

