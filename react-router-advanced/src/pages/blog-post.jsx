"use client"

import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


// Mock blog data
const blogPosts = {
  1: {
    title: "Understanding React Router",
    content: `
      <p>React Router is the standard routing library for React applications. It enables navigation among views in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.</p>
      <p>React Router v6 introduces several new features and improvements over previous versions, including a new routing system based on the concept of route objects, improved nested routes, and more intuitive APIs.</p>
    `,
  },
  2: {
    title: "Nested Routes in React Router",
    content: `
      <p>Nested routes are a powerful feature in React Router that allows you to create complex UIs with multiple levels of routing.</p>
      <p>With nested routes, you can create a hierarchy of routes that match different parts of the URL path. This is particularly useful for creating layouts with shared UI elements, such as sidebars, headers, and footers.</p>
    `,
  },
  3: {
    title: "Protected Routes and Authentication",
    content: `
      <p>Protected routes are routes that can only be accessed by authenticated users. This is a common requirement in many applications, such as dashboards, admin panels, and user profiles.</p>
      <p>In React Router, you can create protected routes by wrapping your route components with a higher-order component that checks if the user is authenticated. If not, it redirects them to a login page.</p>
    `,
  },
  4: {
    title: "Dynamic Routing with Parameters",
    content: `
      <p>Dynamic routing allows you to create routes that match different URL patterns and extract parameters from the URL. This is useful for creating routes that display different content based on the URL, such as product pages, user profiles, and blog posts.</p>
      <p>In React Router, you can create dynamic routes by adding parameters to your route paths, such as /blog/:id. You can then access these parameters in your components using the useParams hook.</p>
    `,
  },
}

export default function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const foundPost = blogPosts[id]
      if (foundPost) {
        setPost(foundPost)
      } else {
        // If post not found, redirect to 404
        navigate("/404")
      }
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [id, navigate])

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="animate-pulse">
          <div className="loading-placeholder loading-title"></div>
          <div className="loading-placeholder"></div>
          <div className="loading-placeholder"></div>
          <div className="loading-placeholder"></div>
          <div className="loading-placeholder" style={{ width: "83%" }}></div>
        </div>
      </div>
    )
  }

  if (!post) return null

  return (
    <div className="blog-post-container">
      <Link to="/blog" className="back-link">
        ← Back to Blog
      </Link>
      <article className="card blog-card">
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

