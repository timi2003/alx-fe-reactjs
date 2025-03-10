import { createBrowserRouter, Navigate } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/home"
import Login from "./pages/login"
import Profile from "./components/profile"
import ProfileDetails from "./pages/profile-details"
import ProfileSettings from "./pages/profile-settings"
import Blog from "./pages/Blog"
import BlogPost from "./pages/blog-post"
import ProtectedRoute from "./components/protected-route"
import NotFound from "./pages/not-found"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <ProfileDetails />,
          },
          {
            path: "settings",
            element: <ProfileSettings />,
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogPost />,
      },
      {
        path: "404",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
    ],
  },
])

