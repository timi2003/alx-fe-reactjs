import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 1, // 1 minute
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} style={buttonStyle}>
        Refresh Posts
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Button styling
const buttonStyle = {
  padding: "10px",
  margin: "10px 0",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default PostsComponent;
