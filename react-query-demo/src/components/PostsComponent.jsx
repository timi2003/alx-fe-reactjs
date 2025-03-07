import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
    const { data: posts, isLoading, isError, error } = useQuery({
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
  
  export default PostsComponent;