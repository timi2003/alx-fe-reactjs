import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Layout from "./components/Layout"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Profile from "./pages/Profile"
import ProfileDetails from "./pages/Profile/ProfileDetails"
import ProfileSettings from "./pages/Profile/ProfileSettings"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public routes */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:postId" element={<BlogPost />} />
            <Route path="login" element={<Login />} />

            {/* Protected routes */}
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              {/* Nested routes */}
              <Route index element={<Navigate to="details" replace />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;

