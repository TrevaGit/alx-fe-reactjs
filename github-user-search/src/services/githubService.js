import axios from "axios";

// Basic Task 1 API call
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

// Advanced Task 2 API call
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username || "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&per_page=10`
    );

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
