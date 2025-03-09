import { Link } from "react-router-dom"

const Blog = () => {
  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: "Understanding React Router",
      excerpt: "Learn the basics of React Router and how to implement it in your projects.",
    },
    {
      id: 2,
      title: "Advanced Routing Techniques",
      excerpt: "Explore nested routes, protected routes, and dynamic routing in React applications.",
    },
    {
      id: 3,
      title: "Authentication in React",
      excerpt: "Implement user authentication and protected routes in your React applications.",
    },
  ]

  return (
    <div className="page">
      <h1>Blog</h1>
      <p>Explore our latest articles on React development.</p>

      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog

