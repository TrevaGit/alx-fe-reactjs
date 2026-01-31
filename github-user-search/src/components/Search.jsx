import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setUsers([]);

    const results = await fetchAdvancedUsers({
      username: username.trim(),
      location: location.trim(),
      minRepos: minRepos.trim(),
    });

    if (results.length > 0) {
      setUsers(results);
    } else {
      setError("Looks like we cant find any users");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display Users */}
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center space-x-4 p-2 border-b border-gray-200"
        >
          <img src={user.avatar_url} alt={user.login} className="w-16 rounded-full" />
          <div>
            <h2 className="font-bold">{user.login}</h2>
            {user.name && <p>Name: {user.name}</p>}
            {user.location && <p>Location: {user.location}</p>}
            <p>Repos: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
