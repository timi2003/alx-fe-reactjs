"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const BlogPost = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  // Sample blog posts data - in a real app, this would come from an API
  const postsData = {
    1: {
      id: 1,
      title: "Understanding React Router",
      content:
        "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
      author: "Jane Doe",
      date: "2023-05-15",
    },
    2: {
      id: 2,
      title: "Advanced Routing Techniques",
      content:
        "This article explores nested routes, protected routes, and dynamic routing in React applications. Learn how to structure your application for better user experience and code organization.",
      author: "John Smith",
      date: "2023-06-22",
    },
    3: {
      id: 3,
      title: "Authentication in React",
      content:
        "Implementing user authentication in React applications is crucial for protecting sensitive data and providing personalized experiences. This article covers how to set up authentication and protected routes.",
      author: "Alex Johnson",
      date: "2023-07-10",
    },
  }

  useEffect(() => {
    // Simulate API call
    const fetchPost = () => {
      setLoading(true)
      setTimeout(() => {
        const foundPost = postsData[postId]
        if (foundPost) {
          setPost(foundPost)
        } else {
          // If post not found, navigate to blog list
          navigate("/blog", { replace: true })
        }
        setLoading(false)
      }, 500)
    }

    fetchPost()
  }, [postId, navigate])

  if (loading) {
    return <div className="page loading">Loading post...</div>
  }

  return (
    <div className="page blog-post">
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>By {post.author}</span>
        <span>Published on {post.date}</span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <button className="back-btn" onClick={() => navigate("/blog")}>
        Back to Blog
      </button>
    </div>
  )
}

export default BlogPost

