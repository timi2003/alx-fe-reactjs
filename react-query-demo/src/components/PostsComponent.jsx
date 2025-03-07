function PostsComponent() {
    const { data: posts, isLoading, isError, error } = useQuery({
      queryKey: ["posts"],
      queryFn: fetchPosts,
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