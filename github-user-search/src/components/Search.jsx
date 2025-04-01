import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");  // New state for location
    const [userData, setUserData] = useState(null);
    const [users, setUsers] = useState([]);  // Store search results
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleUserSearch = async (e) => {
        e.preventDefault();
        if (!username.trim() && !location.trim()) return;

        setLoading(true);
        setError(false);
        setUserData(null);
        setUsers([]);

        if (username.trim()) {
            // Fetch single user data if username is provided
            const data = await fetchUserData(username);
            if (data) {
                setUserData(data);
            } else {
                setError(true);
            }
        } else if (location.trim()) {
            // Search users by location if username is not provided
            const searchResults = await searchUsers("", location, 0);
            setUsers(searchResults);
        }

        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-semibold text-gray-700">GitHub User Search</h2>

            <form onSubmit={handleUserSearch} className="mt-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="Enter location (optional)..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
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
                </div>
            )}

            {users.length > 0 && (
                <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-700">Users in {location}:</h3>
                    <ul className="mt-2">
                        {users.map((user) => (
                            <li key={user.id} className="p-2 border-b">
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {user.login}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
