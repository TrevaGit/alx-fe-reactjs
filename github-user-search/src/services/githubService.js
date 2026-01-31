import axios from "axios";

// GitHub Search API
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    // Construct search query
    let query = username || "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&per_page=10`
    );

    // Fetch full details for each user (to get public_repos & location)
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (u) => {
        const userDetails = await axios.get(u.url);
        return userDetails.data;
      })
    );

    return usersWithDetails;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
