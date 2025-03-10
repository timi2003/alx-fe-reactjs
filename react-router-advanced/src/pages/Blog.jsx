import { Link } from "react-router-dom"


// Mock blog data
const blogPosts = [
  { id: 1, title: "Understanding React Router", excerpt: "Learn the basics of routing in React applications..." },
  { id: 2, title: "Nested Routes in React Router", excerpt: "Discover how to create nested routes for complex UIs..." },
  {
    id: 3,
    title: "Protected Routes and Authentication",
    excerpt: "Implement authentication and protected routes in your app...",
  },
  { id: 4, title: "Dynamic Routing with Parameters", excerpt: "Handle dynamic content with parameterized routes..." },
]

export default function Blog() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="card blog-card">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="blog-link">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

