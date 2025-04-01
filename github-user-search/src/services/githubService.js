import axios from 'axios';

const API_URL = 'https://api.github.com/users/';
const SEARCH_URL = 'https://api.github.com/search/users?q='; // Search endpoint

// Fetch user details by username
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};

// Search users by location and minimum repositories
export const searchUsers = async (query, location = '', minRepos = 0) => {
    try {
        let searchQuery = `${SEARCH_URL}${query}`;

        if (location) searchQuery += `+location:${location}`;
        if (minRepos > 0) searchQuery += `+repos:>${minRepos}`;

        const response = await axios.get(searchQuery);
        return response.data.items; // Return the list of users
    } catch (error) {
        console.error('Error searching users:', error);
        return [];
    }
};
