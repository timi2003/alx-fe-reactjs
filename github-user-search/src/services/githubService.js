import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}${username}`);
        return response.data;  // Return user data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Return null if user is not found
    }
};
