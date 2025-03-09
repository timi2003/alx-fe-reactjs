const Home = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to the React Router Advanced Demo!</p>
      <p>This application demonstrates:</p>
      <ul>
        <li>Nested routes (check the Profile section when logged in)</li>
        <li>Protected routes (Profile requires authentication)</li>
        <li>Dynamic routing (Blog posts have dynamic URLs)</li>
      </ul>
    </div>
  )
}

export default Home

