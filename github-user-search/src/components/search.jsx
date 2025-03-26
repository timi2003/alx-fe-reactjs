import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError(false);
        setUserData(null);

        const data = await fetchUserData(username);
        if (data) {
            setUserData(data);
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

            {/* Conditional Rendering */}
            {loading && <p className="text-gray-600 mt-3">Loading...</p>}
            {error && <p className="text-red-500 mt-3">Looks like we can't find the user.</p>}

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
        </div>
    );
};

export default Search;

