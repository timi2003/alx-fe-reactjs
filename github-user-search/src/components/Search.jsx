import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);  // New state for repositories
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError(false);
        setUserData(null);
        setRepos([]);

        const data = await fetchUserData(username);
        if (data) {
            setUserData(data);

            // Fetch user repositories
            const repoResponse = await fetch(data.repos_url);
            const repoData = await repoResponse.json();
            setRepos(repoData.slice(0, 5)); // Limit to 5 repos
        } else {
            setError(true);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-semibold text-gray-700">GitHub User Search</h2>

            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded w-full">
                    Search
                </button>
            </form>

            {loading && <p className="text-gray-600 mt-3">Loading...</p>}
            {error && <p className="text-red-500 mt-3">Looks like we can't find the user</p>}

            {userData && (
                <div className="mt-5 p-4 border rounded-lg shadow">
                    <img src={userData.avatar_url} alt="User Avatar" className="w-20 h-20 rounded-full mx-auto" />
                    <h3 className="text-lg font-semibold text-center mt-2">{userData.name || "No Name Available"}</h3>
                    <p className="text-center text-gray-600">@{userData.login}</p>
                    <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-blue-500 mt-2 hover:underline"
                    >
                        View GitHub Profile
                    </a>

                    {/* Display Repositories */}
                    {repos.length > 0 && (
                        <div className="mt-4">
                            <h4 className="text-md font-semibold text-gray-700">Top Repositories:</h4>
                            <ul className="mt-2">
                                {repos.map((repo) => (
                                    <li key={repo.id} className="mt-1">
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            {repo.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
