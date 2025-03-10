import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/auth-context"
import Layout from "./components/layout"
import Home from "./pages/home"
import Login from "./pages/login"
import Profile from "./components/Profile"
import ProfileDetails from "./pages/profile-details"
import ProfileSettings from "./pages/profile-settings"
import Blog from "./pages/Blog"
import BlogPost from "./pages/blog-post"
import ProtectedRoute from "./components/protected-route"
import NotFound from "./pages/not-found"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home route */}
            <Route index element={<Home />} />

            {/* Login route */}
            <Route path="login" element={<Login />} />

            {/* Protected profile routes */}
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route index element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* Blog routes */}
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />

            {/* 404 handling */}
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

